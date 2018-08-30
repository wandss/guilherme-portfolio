from rest_framework.serializers import ModelSerializer
from .models import PersonalContact

class PersonalContactSerializer(ModelSerializer):
    class Meta:
        model = PersonalContact
        fields = "__all__"
