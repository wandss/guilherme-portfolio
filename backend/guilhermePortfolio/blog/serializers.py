from rest_framework.serializers import ModelSerializer
from .models import Posts

class PostsSerializer(ModelSerializer):
    class Meta:
        model = Posts
        exclude = ('id',)
