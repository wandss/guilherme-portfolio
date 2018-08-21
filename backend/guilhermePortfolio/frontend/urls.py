from django.urls import path
from .views import NavbarItemListAPIView, BrandListAPIView

app_name = 'frontend'

urlpatterns = [
    path('navbaritems/', NavbarItemListAPIView.as_view(), name='navbaritems'),
    path('brand/', BrandListAPIView.as_view(), name='brand')
]
