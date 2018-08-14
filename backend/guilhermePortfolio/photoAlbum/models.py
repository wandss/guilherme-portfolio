from uuid import uuid4
from django.db import models

class Image(models.Model):
    uuid = models.UUIDField(default=uuid4, editable=False)
    width = models.PositiveSmallIntegerField(default=100)
    height = models.PositiveSmallIntegerField(default=100)
    image = models.ImageField(upload_to='uploads', width_field='width',
            height_field='height')

    def __str__(self):
        return self.image.name


class PhotoAlbum(models.Model):
    uuid = models.UUIDField(default=uuid4, editable=False)
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=200, null=True, blank=True)
    create_date = models.DateTimeField(auto_now_add=True)
    thumbnail = models.OneToOneField(Image, on_delete=models.DO_NOTHING,
            related_name='cover_image')
    images = models.ManyToManyField(Image)

    def __str__(self):
        return self.name


