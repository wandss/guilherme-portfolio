from django.shortcuts import render
from django.db.models import Q
from rest_framework.generics import (ListAPIView, CreateAPIView,
        ListCreateAPIView)
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import PhotoAlbum, Image
from .serializers import PhotoAlbumSerializer, ImageSerializer

class PublicPhotoAlbumListAPIView(ListAPIView):
    """Returns all Public Photo Albums objects."""

    permission_classes = (IsAuthenticatedOrReadOnly, )
    serializer_class = PhotoAlbumSerializer

    def get_queryset(self):
        """Filter results"""
        queryset = PhotoAlbum.objects.filter(public=True)

        query = self.request.GET.get('q')

        if query:

            queryset = queryset.filter(
                Q(published=query)
            )

        return queryset


class PrivatePhotoAlbumListAPIView(ListAPIView):
    """Returns all Private Albums objects."""
    serializer_class = PhotoAlbumSerializer
    queryset = PhotoAlbum.objects.filter(public=True)


class PhotoAlbumCreateAPIView(CreateAPIView):
    serializer_class = PhotoAlbumSerializer
    queryset = PhotoAlbum.objects.all()

class ImageCreateAPIView(ListCreateAPIView):
    serializer_class = ImageSerializer
    queryset = Image.objects.all()



"""
TODO: 
    In 'PrivatePhotoAlbum': Create a permission class to only list Albums 
    which users are allowed to acces, based on group permission
    The group to be created will have the album ID as it's name.
    Overrides get_queryset method, get the logged user,
    and checks if it is related to the group. 
    Group Name: "Album-{name}"
    OPT2:
        Filter the queryset: Get user groups.
        Filter by album's name, based on group name.
        For each case, the Group Name must match the album name.
        For this, make album Name unique.

"""
