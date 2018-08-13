from django.urls import path
from .views import PostsListAPIView

app_name = 'blog'

urlpatterns = [
    path('list', PostsListAPIView.as_view(), name='list'),

]


