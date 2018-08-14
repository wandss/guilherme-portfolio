from rest_framework.serializers import ModelSerializer
from .models import PhotoAlbum, Image

class PhotoAlbumSerializer(ModelSerializer):
    class Meta:
        model = PhotoAlbum
        exclude = ('id',)

class ImageSerialiazer(ModelSerializer):

    class Meta:
        model = Image
        exclude = ('id', )


