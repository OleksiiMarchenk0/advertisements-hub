from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from .models import Category, Offer
from .serializers import CategorySerializer, OfferSerializer


#Categories view

@csrf_exempt
def categoryApi(request, id=0):
    categories=Category.objects.all()
    if request.method == 'GET':
        categories_serializers=CategorySerializer(categories, many=True)
        return JsonResponse(categories_serializers.data, safe=False)
    elif request.method == 'POST':
        category_data = JSONParser().parse(request)
        categories_serializers = CategorySerializer(data = category_data)
        if categories_serializers.is_valid():
            categories_serializers.save()
            return JsonResponse('Category added successfully!!',safe=False)
        return JsonResponse('Failed to add category',safe=False)
    elif request.method == 'PUT':
        category_data = JSONParser().parse(request)
        category = Category.objects.get(id=category_data['id'])
        categories_serializers = CategorySerializer(category,data = category_data)
        if categories_serializers.is_valid():
            categories_serializers.save()
            return JsonResponse('Category updated successfully!!',safe=False)
        return JsonResponse('Failed to update category', safe=False)
    elif request.method == 'DELETE':
       category = Category.objects.get(id=id)
       category.delete()
       return JsonResponse('Category deleted successfully',safe=False)

#Offers view

@csrf_exempt
def offersApi(request, id=0):
    offers=Offer.objects.all()
    if request.method == 'GET':
        offers_serializers=OfferSerializer(offers, many=True)
        return JsonResponse(offers_serializers.data, safe=False)
    elif request.method == 'POST':
        offer_data = JSONParser().parse(request)
        offers_serializers = OfferSerializer(data = offer_data)
        if offers_serializers.is_valid():
            offers_serializers.save()
            return JsonResponse('Offer added successfully!!',safe=False)
        return JsonResponse('Failed to add offer',safe=False)
    elif request.method == 'PUT':
        offer_data = JSONParser().parse(request)
        offer = Offer.objects.get(id=offer_data['id'])
        offers_serializers = OfferSerializer(offer,data = offer_data)
        if offers_serializers.is_valid():
            offers_serializers.save()
            return JsonResponse('Offer updated successfully!!',safe=False)
        return JsonResponse('Failed to update offer',safe=False)
    elif request.method == 'DELETE':
        offer = Offer.objects.get(id=id)
        offer.delete()
        return JsonResponse('Offer deleted successfully',safe=False)