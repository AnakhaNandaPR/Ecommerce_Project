from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .serializers import CartSerializer
from .models import CartItem
class CartViewSet(viewsets.ModelViewSet):
    queryset=CartItem.objects.all()
    serializer_class=CartSerializer