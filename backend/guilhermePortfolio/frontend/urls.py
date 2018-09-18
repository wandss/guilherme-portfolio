from django.urls import path
from .views import (NavbarItemListAPIView, BrandListAPIView,
                   LoginAPIView, LogoutAPIView, AdminItemLisAPIVIew)

app_name = 'frontend'

urlpatterns = [
    path('navbaritems/', NavbarItemListAPIView.as_view(), name='navbaritems'),
    path('brand/', BrandListAPIView.as_view(), name='brand'),
    path('login/', LoginAPIView.as_view(), name='login'),
    path('logout/', LogoutAPIView.as_view(), name='logout'),
    path('adminmenu/', AdminItemLisAPIVIew.as_view(), name="adminmenu"),
]
