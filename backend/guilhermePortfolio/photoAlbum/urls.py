from django.urls import path
from .views import (PhotoAlbumListAPIView, PhotoAlbumCreateAPIView,
        ImageCreateAPIView)

app_name = 'photoAlbum'
urlpatterns = [
        path('list', PhotoAlbumListAPIView.as_view(), name="list"),
        path('new', PhotoAlbumCreateAPIView.as_view(), name="new"),
        path('images/', ImageCreateAPIView.as_view(), name="images"),

]
