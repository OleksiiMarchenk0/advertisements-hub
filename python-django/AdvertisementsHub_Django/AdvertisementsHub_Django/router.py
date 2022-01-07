from advertisement_hub.viewsets import OffersViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('offers', OffersViewSet)