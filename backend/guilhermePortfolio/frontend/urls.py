from django.urls import path
from .views import (NavbarItemListAPIView, BrandListAPIView,
                    PersonalContactListAPIView)

app_name = 'frontend'

urlpatterns = [
    path('navbaritems/', NavbarItemListAPIView.as_view(), name='navbaritems'),
    path('brand/', BrandListAPIView.as_view(), name='brand'),
    path('personalcontact/', PersonalContactListAPIView.as_view(), name="contact"),
]
