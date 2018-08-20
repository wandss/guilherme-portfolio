from rest_framework.serializers import ModelSerializer
from .models import NavbarItem


class NavbarItemSerializer(ModelSerializer):
    class Meta:
        model = NavbarItem
        fields = ('uuid', 'name', 'link',)

