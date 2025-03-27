# shop_back/views.py

from django.http import JsonResponse
from .models import Product
from .models import Category
from django.http import HttpResponse

def product_list(request):
    products = Product.objects.all()
    product_data = [product.name for product in products]
    return JsonResponse(product_data, safe=False)

def product_detail(request, pk):
    try:
        product = Product.objects.get(pk=pk)
        product_data = {
            'id': product.id,
            'name': product.name,
            'description': product.description,
            'price': str(product.price),
        }
        return JsonResponse(product_data)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)

def category_list(request):
    categories = Category.objects.all()
    category_data = [
        {
            'id': category.id,
            'name': category.name,
            'description': category.description,
        }
        for category in categories
    ]
    return JsonResponse(category_data, safe=False)

def category_detail(request, pk):
    try:
        category = Category.objects.get(pk=pk)
        category_data = {
            'id': category.id,
            'name': category.name,
            'description': category.description,
        }
        return JsonResponse(category_data)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)

def category_products(request, id):
    try:
        category = Category.objects.get(pk=id)
        products = category.product_set.all()
        product_data = [
            {
                'id': product.id,
                'name': product.name,
                'description': product.description,
                'price': str(product.price),
            }
            for product in products
        ]
        return JsonResponse(product_data, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)

def homepage(request):
    return HttpResponse("Welcome to the Homepage!")