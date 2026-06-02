from rest_framework import serializers
from .models import Product,Category
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields='__all__'
class ProductSerializer(serializers.ModelSerializer):
    #category=CategorySerializer(read_only=True)
    #category_id=serializers.PrimaryKeyRelatedField(
        #queryset=Category.objects.all(),source='category',write_only=True
    #)
    #discount=serializers.SerializerMethodField()
    class Meta:
        model=Product
        fields='__all__'
    #def get_discount(self,obj):
        #if obj.old_price:return int(100-(obj.price/obj.old_price*100))
        #return 0

    
