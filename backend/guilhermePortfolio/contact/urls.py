from django.urls import path
from .views import (PersonalContactListAPIView, SendMessageAPIView)

app_name = 'contact'

urlpatterns = [
    path('', PersonalContactListAPIView.as_view(), 
         name="contact"),
    path('send', SendMessageAPIView.as_view(),
        name="sendmail"),
]

