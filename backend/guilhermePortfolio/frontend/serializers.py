from rest_framework.serializers import ModelSerializer
from .models import NavbarItem, Brand, AdminItem


class NavbarItemSerializer(ModelSerializer):
    class Meta:
        model = NavbarItem
        fields = ('uuid', 'name', 'link',)


class BrandSerializer(ModelSerializer):
    class Meta:
        model = Brand
        fields = ('uuid', 'title', 'subtitle',)


class AdminItemSerializer(ModelSerializer):
    class Meta:
        model = AdminItem
        exclude = ('id',)
