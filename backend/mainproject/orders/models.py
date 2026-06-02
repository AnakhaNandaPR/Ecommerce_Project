from django.db import models
from products.models import Product
# Create your models here.
class Order(models.Model):
    
    product=models.ForeignKey(Product,on_delete=models.CASCADE,default=1)
    quantity=models.IntegerField(default=1)
    customer_name=models.CharField(max_length=100,default="")
    address=models.TextField(default="")
    phone=models.CharField(max_length=20, default="")
    total=models.FloatField(default=0.0)
    created_at=models.DateTimeField(auto_now_add=True)