from django.shortcuts import render
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Posts
from .serializers import PostsSerializer

class PostsListAPIView(ListAPIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    serializer_class = PostsSerializer
    queryset = Posts.objects.all()

# Create your views here.
