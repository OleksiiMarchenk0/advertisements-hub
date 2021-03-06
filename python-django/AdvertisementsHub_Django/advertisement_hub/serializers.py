from django.test import TestCase

from rest_framework import serializers
from advertisement_hub.models import Category,Offer

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields='__all__'

class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model=Offer
        fields='__all__'