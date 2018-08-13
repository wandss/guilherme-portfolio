from uuid import uuid4
from django.db import models


class Posts(models.Model):

    uuid = models.UUIDField(default=uuid4, editable=False)
    title = models.CharField(max_length=20)
    description = models.CharField(max_length=100,)
    create_date = models.DateTimeField(auto_now_add = True)
    #image = models.ImageField()

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = 'Posts'

