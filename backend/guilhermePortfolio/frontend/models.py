from uuid import uuid4
from django.db import models

class NavbarItem(models.Model):
    uuid = models.UUIDField(default=uuid4, editable=False)
    name = models.CharField(max_length=30, unique=True)
    link = models.CharField(max_length=20)

    def __str__(self):
        return self.name


