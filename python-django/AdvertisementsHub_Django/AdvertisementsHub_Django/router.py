from advertisement_hub.viewsets import OffersViewSet,CategoriesViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('offers', OffersViewSet)
router.register('category', CategoriesViewSet)