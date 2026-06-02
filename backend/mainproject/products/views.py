from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets,filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Product,Category
from .serializers import ProductSerializer,CategorySerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset=Product.objects.all()
    serializer_class=ProductSerializer
    #lookup_field='slug'
    filter_backends=[DjangoFilterBackend,filters.SearchFilter,filters.OrderingFilter]
    filterset_fields=['category__slug','featured']
    search_fields=['name','description']
    ordering_fields=['price','created_at']

class CategoryViewset(viewsets.ModelViewSet):
    queryset=Category.objects.all()
    serializer_class=CategorySerializer
