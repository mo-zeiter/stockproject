from django.urls import path
from . import views

urlpatterns = [
    path('form',views.stock_form_view,name='form' ),
]
