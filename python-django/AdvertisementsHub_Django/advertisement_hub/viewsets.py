from rest_framework import viewsets
from . import models
from . import serializers

class OffersViewSet(viewsets.ModelViewSet):
    queryset=models.Offer.objects.all()
    serializer_class = serializers.OfferSerializer

class CategoriesViewSet(viewsets.ModelViewSet):
    queryset=models.Category.objects.all()
    serializer_class = serializers.CategorySerializer