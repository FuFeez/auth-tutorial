
from .serializers import UserRegistrationSerializer, LoginSerializers
from rest_framework import generics


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth import get_user_model
from django.contrib.auth.models import update_last_login
# from rest_framework.permissions import IsAuthenticated


User = get_user_model()


class LoginAPIView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = LoginSerializers(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        update_last_login(None, user)
        token, created = Token.objects.get_or_create(user=user)
        user = User.objects.get(username=user.username)
        return Response({"status": status.HTTP_200_OK, "Token": token.key, "role": user.is_superuser})
    
class UserRegistrationView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegistrationSerializer

class UserRoleView(APIView):
    # permission_classes = [IsAuthenticated]

    def get(self, request):
        if request.user.is_superuser:
            role = 'admin'
        else:
            role = 'patient'
        return Response({'role': role}, status=status.HTTP_200_OK)
