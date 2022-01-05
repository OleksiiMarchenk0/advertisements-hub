from django.test import TestCase

from rest_framework import serializers
from advertisement_hub.models import Category,Offer

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields=('id',
                'name',
                'ordering')

class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model=Offer
        fields=('id',
                'name',
                'description',
                'price',
                'created_at')