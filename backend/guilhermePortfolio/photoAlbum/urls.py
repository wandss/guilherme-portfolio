from django.urls import path
from .views import (PublicPhotoAlbumListAPIView, PrivatePhotoAlbumListAPIView,
                    PhotoAlbumCreateAPIView, ImageListAPIView,
                    ImageCreateAPIView, PhotoAlbumRetrieve)

app_name = 'photoAlbum'
urlpatterns = [
    path('<uuid:uuid>', PhotoAlbumRetrieve.as_view(),
         name="item"),
    path('public/', PublicPhotoAlbumListAPIView.as_view(),
         name="publiclist"),
    path('private/', PrivatePhotoAlbumListAPIView.as_view(),
         name="privatelist"),
    path('new/', PhotoAlbumCreateAPIView.as_view(), name="new"),
    path('images/', ImageListAPIView.as_view(), name="images"),
    path('images/new', ImageCreateAPIView.as_view(), name="newimage"),
]
