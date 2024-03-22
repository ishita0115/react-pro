from django.shortcuts import render
import os
# Create your views here.
from rest_framework import generics
from .models import Location,Profile
from .serializers import LocationSerializer,ProfileSerializer

class LocationListCreateAPIView(generics.ListCreateAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
 
class profileview(generics.ListCreateAPIView):
         queryset = Profile.objects.all()
         serializer_class = ProfileSerializer

