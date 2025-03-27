from django.urls import path
from . import views

urlpatterns = [
    path('api/products/', views.ProductList.as_view(), name='product-list'),
    path('api/products/<int:pk>/', views.ProductDetail.as_view(), name='product-detail'),
    path('api/categories/', views.CategoryList.as_view(), name='category-list'),
    path('api/categories/<int:pk>/', views.CategoryDetail.as_view(), name='category-detail'),
    path('api/categories/<int:id>/products/', views.CategoryProductsList.as_view(), name='category-products'),
]