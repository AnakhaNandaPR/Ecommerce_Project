from django.db import models

# Create your models here.
class Category(models.Model):
    name=models.CharField(max_length=100)
    slug=models.SlugField(unique=True)

class Product(models.Model):
    category=models.ForeignKey(Category,on_delete=models.CASCADE)
    name=models.CharField(max_length=200)
    slug=models.SlugField(unique=True)
    description=models.TextField()
    price=models.DecimalField(max_digits=10,decimal_places=2)
    old_price=models.DecimalField(max_digits=10,decimal_places=2,null=True,blank=True)
    stock=models.IntegerField()
    image=models.ImageField(upload_to='products/')
    featured=models.BooleanField(default=False)
    created_at=models.DateTimeField(auto_now_add=True)