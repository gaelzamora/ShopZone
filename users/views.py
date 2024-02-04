from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.hashers import make_password
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import User
from rest_framework import status
from .serializers import RegisterUserSerializer, MyTokenObtainPairSerializer, UserSerializer

@api_view(['DELETE'])
def delete_user(request, pk):
    if request.user.is_staff:
        user = User.objects.get(pk=pk)
        user.delete()

        return Response(status=status.HTTP_200_OK)
    return Response(status=status.HTTP_401_UNAUTHORIZED)


@api_view(['GET'])
def get_users(request):
    if request.user.is_staff:
        users = User.objects.exclude(email='admin@admin.com')
        serializer = UserSerializer(users, many=True)

        return Response(serializer.data)

    return Response(status=status.HTTP_401_UNAUTHORIZED)

@api_view(['POST'])
def register(request):
    data = request.data
    user = User.objects.create(
        email=data['email'],
        first_name=data['first_name'],
        last_name=data['last_name'],
        password=make_password(data['password'])
    )
    serializer = RegisterUserSerializer(user, many=False)
    return Response(serializer.data)

class LoginView(TokenObtainPairView):
    serializer_class=MyTokenObtainPairSerializer