from uuid import uuid4
from django.db import models

class Image(models.Model):
    uuid = models.UUIDField(default=uuid4, editable=False)
    image = models.ImageField(upload_to='uploads')


class PhotoAlbum(models.Model):
    uuid = models.UUIDField(default=uuid4, editable=False)
    name = models.CharField(max_length=50)
    create_date = models.DateTimeField(auto_now_add=True)
    cover_image = models.OneToOneField(Image, on_delete=models.DO_NOTHING,
            related_name='cover_image')
    images = models.ManyToManyField(Image)


