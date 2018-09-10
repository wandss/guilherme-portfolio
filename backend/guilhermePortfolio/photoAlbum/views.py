from django.shortcuts import render
from django.db.models import Q
from rest_framework.generics import (ListAPIView, CreateAPIView,
                                     ListCreateAPIView, RetrieveAPIView)
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.parsers import MultiPartParser, FileUploadParser
from rest_framework.response import Response
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

    def get_queryset(self):
        queryset = PhotoAlbum.objects.filter(public=False)
        query = self.request.GET.get('q')

        if query:

            queryset = queryset.filter(
                Q(published=query)
            )

        return queryset            


class PhotoAlbumRetrieve(RetrieveAPIView):
    """Retrives photo Albums based on user's group"""
    #TODO: Ovverride 'get' method to check whether
    #user can access the album.

    permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = PhotoAlbum.objects.all()
    serializer_class = PhotoAlbumSerializer
    lookup_field = 'uuid'


class PhotoAlbumCreateAPIView(CreateAPIView):
    serializer_class = PhotoAlbumSerializer
    queryset = PhotoAlbum.objects.all()

class ImageListAPIView(ListAPIView):
    serializer_class = ImageSerializer
    queryset = Image.objects.all()

class ImageCreateAPIView(APIView):
    parser_classes = (MultiPartParser, )
    serializer_class = ImageSerializer
    queryset = Image.objects.all()


    def post(self, request, format=None):
        import pdb;pdb.set_trace()#DEBUG
        #document = request.data['file']
        #uploaded = FileUpload.objects.create(document=document)
        #uploaded.save()
        data = 'OK'
        return Response(data)






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
