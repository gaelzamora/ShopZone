from django.urls import path
from . import views

urlpatterns = [
    path('search/', views.search),
    path('', views.get_products),
    path('get/<str:slug>/', views.get_product),
    path('get/admin/<int:id>/', views.get_product_admin),
    path('post/', views.create_product),
    path('edit/<int:pk>/', views.edit_product),
    path('delete/<int:pk>/', views.delete_product),
    path('category/<str:category>/', views.get_prod_by_category),
]