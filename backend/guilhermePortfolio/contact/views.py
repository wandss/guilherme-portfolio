from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny
from .models import PersonalContact
from .serializers import PersonalContactSerializer


class PersonalContactListAPIView(ListAPIView):
    permission_classes = (AllowAny, )
    serializer_class = PersonalContactSerializer
    queryset = PersonalContact.objects.all()
