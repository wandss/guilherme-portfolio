from rest_framework.serializers import (ModelSerializer,
        SlugRelatedField, RelatedField )
from .models import PhotoAlbum, Image


class ImageSerializer(ModelSerializer):

    class Meta:
        model = Image
        exclude = ('id', )



class PhotoAlbumSerializer(ModelSerializer):

    class Meta:
        model = PhotoAlbum
        exclude = ('id',)

