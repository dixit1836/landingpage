from django.contrib import admin
from .models import Order


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'mobile', 'pincode', 'status', 'created_at')
    list_filter = ('status', 'created_at')
    search_fields = ('name', 'mobile', 'address', 'pincode')
    readonly_fields = ('created_at',)
    list_editable = ('status',)  # Allow quick status updates from list view
    date_hierarchy = 'created_at'  # Add date filter at top
    fieldsets = (
        ('ઓર્ડર માહિતી', {
            'fields': ('name', 'mobile', 'address', 'pincode')
        }),
        ('સ્થિતિ', {
            'fields': ('status', 'created_at')
        }),
    )
    
    def get_readonly_fields(self, request, obj=None):
        # Make created_at readonly
        return self.readonly_fields
