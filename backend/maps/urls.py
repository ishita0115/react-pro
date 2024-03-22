from django.urls import path
from .views import LocationListCreateAPIView,profileview

import os
urlpatterns = [
    path('locations/', LocationListCreateAPIView.as_view(), name='location-list-create'),
    path('profile/',profileview.as_view()),
]
    