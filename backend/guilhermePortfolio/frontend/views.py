from django.shortcuts import render, HttpResponseRedirect
from django.contrib.auth import authenticate, login, logout
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .serializers import (NavbarItemSerializer, BrandSerializer)
from .models import NavbarItem, Brand


def home(request):
    return render(request, 'frontend/index.html', {})

class NavbarItemListAPIView(ListAPIView):
    permission_classes = (AllowAny, )
    serializer_class = NavbarItemSerializer
    queryset = NavbarItem.objects.all()


class BrandListAPIView(ListAPIView):
    permission_classes = (AllowAny, )
    serializer_class = BrandSerializer
    queryset = Brand.objects.all()

class LoginAPIView(APIView):
    permission_classes = (AllowAny,)
    def post(self, request):
        username = request.data.get('username')
        passwd = request.data.get('password')
        user = authenticate(username=username, password=passwd)

        if user:
            login(request, user)
            return Response('ok')

        else:
            return Response(403)


class LogoutAPIView(APIView):

    def get(self, request):
        logout(request)
        return Response('loggedout')

