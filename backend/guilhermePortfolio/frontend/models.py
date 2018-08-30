from uuid import uuid4
from django.db import models

class NavbarItem(models.Model):
    uuid = models.UUIDField(default=uuid4, editable=False)
    name = models.CharField(max_length=30, unique=True)
    link = models.CharField(max_length=20)

    def __str__(self):
        return self.name

class Brand(models.Model):
    uuid = models.UUIDField(default=uuid4, editable=False)
    title = models.CharField(max_length=30, unique=True)
    subtitle = models.CharField(max_length=30, unique=True)


    def __str__(self):
        return self.title

class PersonalContact(models.Model):
    uuid = models.UUIDField(default=uuid4, editable=False)
    phone = models.CharField(max_length=20)
    email = models.EmailField()

    def __str__(self):
        return "Contato"

    class Meta:
        verbose_name_plural = 'Meus Contatos'
