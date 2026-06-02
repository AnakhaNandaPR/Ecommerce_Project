from rest_framework.routers import DefaultRouter
from .views import ProductViewSet,CategoryViewset
router=DefaultRouter()
router.register('products',ProductViewSet)
router.register('category',CategoryViewset)
urlpatterns = router.urls
