from django.shortcuts import render, redirect
from django.contrib import messages
from django.http import JsonResponse
from django.views.decorators.http import require_POST

from .models import Order


def index(request):
    if request.method == 'POST':
        name = request.POST.get('name', '').strip()
        mobile = request.POST.get('mobile', '').strip()
        address = request.POST.get('address', '').strip()
        pincode = request.POST.get('pincode', '').strip()
        
        # Check if it's an AJAX request (from fetch)
        is_ajax = request.headers.get('X-Requested-With') == 'XMLHttpRequest'
        
        # Validate form data
        if not all([name, mobile, address, pincode]):
            if is_ajax:
                return JsonResponse({'success': False, 'error': 'કૃપા કરીને બધી માહિતી ભરો!'}, status=400)
            messages.error(request, 'કૃપા કરીને બધી માહિતી ભરો!')
            return render(request, "main/index.html")
        
        # Check if mobile number is already registered
        existing_order = Order.objects.filter(mobile=mobile).first()
        if existing_order:
            error_message = f'આ મોબાઇલ નંબર ({mobile}) પહેલેથી રજિસ્ટર થયેલ છે!'
            if is_ajax:
                return JsonResponse({'success': False, 'error': error_message}, status=400)
            messages.error(request, error_message)
            return render(request, "main/index.html")
        
        try:
            # Save order to database (will be visible in admin panel)
            order = Order.objects.create(
                name=name,
                mobile=mobile,
                address=address,
                pincode=pincode,
                status='pending'  # Default status
            )
            
            # Return JSON response for AJAX requests
            if is_ajax:
                return JsonResponse({
                    'success': True,
                    'message': f'ઓર્ડર સફળતાપૂર્વક સેવ થયો! ઓર્ડર ID: #{order.id}',
                    'order_id': order.id
                })
            
            # Success message for regular form submission
            messages.success(request, f'ઓર્ડર સફળતાપૂર્વક સેવ થયો!')
            
            # Redirect to thank you page
            return redirect('thank_you')
        except Exception as e:
            if is_ajax:
                return JsonResponse({'success': False, 'error': 'કોઈ ભૂલ આવી. કૃપા કરીને ફરી પ્રયાસ કરો.'}, status=500)
            messages.error(request, 'કોઈ ભૂલ આવી. કૃપા કરીને ફરી પ્રયાસ કરો.')
            return render(request, "main/index.html")
    
    return render(request, "main/index.html")


def thank_you(request):
    return render(request, "main/thankyou.html")


def check_mobile(request):
    """Check if mobile number is already registered"""
    if request.method == 'GET':
        mobile = request.GET.get('mobile', '').strip()
        if mobile:
            exists = Order.objects.filter(mobile=mobile).exists()
            if exists:
                existing_order = Order.objects.filter(mobile=mobile).first()
                return JsonResponse({
                    'exists': True,
                    'message': f'આ મોબાઇલ નંબર પહેલેથી રજિસ્ટર થયેલ છે!',
                    'order_id': existing_order.id
                })
            return JsonResponse({'exists': False, 'message': 'મોબાઇલ નંબર ઉપલબ્ધ છે'})
    return JsonResponse({'error': 'Invalid request'}, status=400)


def admin_panel(request):
    """Admin panel to view all orders"""
    orders = Order.objects.all().order_by('-created_at')
    total_orders = orders.count()
    
    # Count orders by status
    status_counts = {
        'pending': Order.objects.filter(status='pending').count(),
        'confirmed': Order.objects.filter(status='confirmed').count(),
        'shipped': Order.objects.filter(status='shipped').count(),
        'delivered': Order.objects.filter(status='delivered').count(),
    }

    status_update_choices = [
        ('pending', 'Pending'),
        ('shipped', 'Shipped'),
        ('delivered', 'Delivered'),
    ]
    status_update_values = [value for value, _ in status_update_choices]
    
    context = {
        'orders': orders,
        'total_orders': total_orders,
        'status_counts': status_counts,
        'status_update_choices': status_update_choices,
        'status_update_values': status_update_values,
    }
    
    return render(request, "main/admin_panel.html", context)


@require_POST
def update_order_status(request, order_id):
    """Update order status from the custom admin panel"""
    new_status = request.POST.get('status', '').strip()
    allowed_statuses = {'pending', 'shipped', 'delivered'}

    if new_status not in allowed_statuses:
        return JsonResponse({'success': False, 'error': 'Invalid status selected.'}, status=400)

    try:
        order = Order.objects.get(pk=order_id)
    except Order.DoesNotExist:
        return JsonResponse({'success': False, 'error': 'Order not found.'}, status=404)

    previous_status = order.status
    if previous_status == new_status:
        return JsonResponse({
            'success': True,
            'status': order.status,
            'status_display': order.get_status_display(),
            'order_id': order.id,
            'previous_status': previous_status,
            'unchanged': True,
        })

    order.status = new_status
    order.save(update_fields=['status'])

    return JsonResponse({
        'success': True,
        'status': order.status,
        'status_display': order.get_status_display(),
        'order_id': order.id,
        'previous_status': previous_status,
    })
