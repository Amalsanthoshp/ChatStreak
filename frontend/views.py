from django.shortcuts import render
from django.http import HttpResponse
from .models import *
from .serializers import *
from rest_framework import generics

# Create your views here.
def home(request):
	return render(request,template_name='index.html')


def chat_screen(request):
	chat = Chat.objects.all()
	person = Person.objects.all()
	context = {'chat':chat,'user':person}
	return render(request,'chat.html',context)


class ListUser(generics.ListCreateAPIView):
    queryset = Person.objects.all().select_related()
    serializer_class = PersonSerializer

class DetailUser(generics.RetrieveUpdateDestroyAPIView):
    queryset = Person.objects.all().select_related()
    serializer_class = PersonSerializer

class ListGroup(generics.ListCreateAPIView):
	queryset = GroupChat.objects.all().select_related()
	serializer_class = GroupSerializer 
	
	