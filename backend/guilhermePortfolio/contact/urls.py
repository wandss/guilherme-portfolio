from django.urls import path
from .views import PersonalContactListAPIView

app_name = 'contact'

    
urlpatterns = [
    path('', PersonalContactListAPIView.as_view(), 
         name="contact"),
]

