from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.core.mail import send_mail
from .models import PersonalContact
from .serializers import PersonalContactSerializer


class PersonalContactListAPIView(ListAPIView):
    permission_classes = (AllowAny, )
    serializer_class = PersonalContactSerializer
    queryset = PersonalContact.objects.all()


class SendMessageAPIView(APIView):
    permission_classes = (AllowAny, )

    def post(self, request):
        print('SENDING E_MAIL')
        print('Aguarde....')
        #send_mail(
        #    'Subject',
        #    'HELLO MODAFOCA DJANGO',
        #    'testingDjangomail@gmail.com',
        #    ['wandss@gmail.com'],
        #    fail_silently=False,
        #)
        return Response('OK')
