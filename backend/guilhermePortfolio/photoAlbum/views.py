from django.shortcuts import render
from rest_framework.generics import (ListAPIView, CreateAPIView,
        ListCreateAPIView)
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import PhotoAlbum, Image
from .serializers import PhotoAlbumSerializer, ImageSerializer

class PhotoAlbumListAPIView(ListAPIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )
    serializer_class = PhotoAlbumSerializer
    queryset = PhotoAlbum.objects.all()

class PhotoAlbumCreateAPIView(CreateAPIView):
    serializer_class = PhotoAlbumSerializer
    queryset = PhotoAlbum.objects.all()

class ImageCreateAPIView(ListCreateAPIView):
    serializer_class = ImageSerializer
    queryset = Image.objects.all()

