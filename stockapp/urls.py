from django.urls import path
from . import views

urlpatterns = [
    path('',views.stock_form_view,name='form' ),
]
