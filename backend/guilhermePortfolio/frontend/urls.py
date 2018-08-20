from django.urls import path
from .views import NavbarItemListAPIView

app_name = 'frontend'

urlpatterns = [
    path('navbaritems/', NavbarItemListAPIView.as_view(), name='navbaritems')
]
