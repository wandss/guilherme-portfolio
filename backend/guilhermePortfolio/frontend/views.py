from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny
from .serializers import NavbarItemSerializer, BrandSerializer
from .models import NavbarItem, Brand


class NavbarItemListAPIView(ListAPIView):
    permission_classes = (AllowAny, )
    serializer_class = NavbarItemSerializer
    queryset = NavbarItem.objects.all()


class BrandListAPIView(ListAPIView):
    permission_classes = (AllowAny, )
    serializer_class = BrandSerializer
    queryset = Brand.objects.all()
