from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from .models import Category, Offer
from .serializers import CategorySerializer, OfferSerializer


# Create your views here.

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
            return JsonResponse('Added successfully!!',safe=False)
        return JsonResponse('Failed to add',safe=False)
    elif request.method == 'PUT':
        category_data = JSONParser().parse(request)
        category = Category.objects.get(id=category_data['id'])
        categories_serializers = CategorySerializer(category,data = category_data)
        if categories_serializers.is_valid():
            categories_serializers.save()
            return JsonResponse('Updated successfully!!',safe=False)
        return JsonResponse('Failed to update',safe=False)
    elif request.method == 'DELETE':
       category = Category.objects.get(id=id)
       category.delete()
       return JsonResponse('Deleted successfully',safe=False)