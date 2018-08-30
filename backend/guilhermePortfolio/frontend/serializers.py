from rest_framework.serializers import ModelSerializer
from .models import NavbarItem, Brand, PersonalContact


class NavbarItemSerializer(ModelSerializer):
    class Meta:
        model = NavbarItem
        fields = ('uuid', 'name', 'link',)

class BrandSerializer(ModelSerializer):
    class Meta:
        model = Brand
        fields = ('uuid', 'title', 'subtitle',)

class PersonalContactSerializer(ModelSerializer):
    class Meta:
        model = PersonalContact
        fields = "__all__"
