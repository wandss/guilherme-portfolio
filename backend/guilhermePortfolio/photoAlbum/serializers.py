from rest_framework.serializers import (ModelSerializer, SlugRelatedField,
                                        SerializerMethodField)
from .models import PhotoAlbum, Image


class ImageSerializer(ModelSerializer):

    image_url = SerializerMethodField()

    class Meta:
        model = Image
        exclude = ('id',)


    def get_image_url(self, obj):
        if obj.image:
            return str(obj.image.url)


class PhotoAlbumSerializer(ModelSerializer):
    image_data= SerializerMethodField()
    thumbnail_data = SerializerMethodField()
    thumbnail = SlugRelatedField(slug_field='uuid',
                                 queryset=Image.objects.all())

    class Meta:
        model = PhotoAlbum
        exclude = ('id',)

    def get_image_data(self, obj):
        image_urls = [{'src':image.image.url, 'width':image.image.width,
                       'height':image.image.height}
                      for image in obj.images.select_related()]
        return image_urls

    def get_thumbnail_data(self, obj):
        return {'uuid':obj.thumbnail.uuid,
                'src':obj.thumbnail.image.url,
                'width':obj.thumbnail.width,
                'height':obj.thumbnail.image.height
               }
