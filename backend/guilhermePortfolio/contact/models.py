from uuid import uuid4
from django.db import models

class PersonalContact(models.Model):
    uuid = models.UUIDField(default=uuid4, editable=False)
    phone = models.CharField(max_length=20)
    email = models.EmailField()

    def __str__(self):
        return "Contato"

    class Meta:
        verbose_name_plural = 'Meus Contatos'
