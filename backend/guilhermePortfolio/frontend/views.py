from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny
from .serializers import NavbarItemSerializer
from .models import NavbarItem


class NavbarItemListAPIView(ListAPIView):
    permission_classes = (AllowAny, )
    serializer_class = NavbarItemSerializer
    queryset = NavbarItem.objects.all()
