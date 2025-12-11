from django.urls import path

from . import views


urlpatterns = [
    path("", views.index, name="index"),
    path("thank-you/", views.thank_you, name="thank_you"),
    path("check-mobile/", views.check_mobile, name="check_mobile"),
    path("admin-panel/", views.admin_panel, name="admin_panel"),
    path("orders/<int:order_id>/status/", views.update_order_status, name="update_order_status"),
    path("orders/<int:order_id>/confirm/", views.confirm_order, name="confirm_order"),
    path("orders/<int:order_id>/delete/", views.delete_order, name="delete_order"),
    path("login/", views.login_view, name="login"),
    path("logout/", views.logout_view, name="logout"),
]

