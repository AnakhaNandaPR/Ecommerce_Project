from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User

@api_view(['POST'])
def register(request):
    username=request.data['username']
    password=request.data['password']
    User.objects.create_user(
        username=username,
        password=password
    )
    return Response({"message":"User created"})