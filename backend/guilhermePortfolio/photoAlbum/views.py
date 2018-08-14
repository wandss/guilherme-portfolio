from django.shortcuts import render
from rest_framework.generics import (ListAPIView, CreateAPIView,
        ListCreateAPIView)
from .models import PhotoAlbum, Image
from .serializers import PhotoAlbumSerializer, ImageSerialiazer

class PhotoAlbumListAPIView(ListAPIView):
    serializer_class = PhotoAlbumSerializer
    queryset = PhotoAlbum.objects.all()

class PhotoAlbumCreateAPIView(CreateAPIView):
    serializer_class = PhotoAlbumSerializer
    queryset = PhotoAlbum.objects.all()

class ImageCreateAPIView(ListCreateAPIView):
    serializer_class = ImageSerialiazer
    queryset = Image.objects.all()

