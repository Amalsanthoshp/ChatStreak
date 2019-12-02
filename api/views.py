from django.shortcuts import render
from django.http import HttpResponse
from .models import *
from .serializers import *
from rest_framework import generics
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.csrf import csrf_protect
from django.utils.decorators import method_decorator
import json
from django.utils import timezone


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
	
@csrf_exempt 
def message_send(request):
	body_unicode = request.body.decode('utf-8')
	body = json.loads(body_unicode)
	message = body['message']
	send_to = body['send_to']
	now = timezone.now()
	send_id = Person.objects.get(id=1)
	recevied_id = Person.objects.get(id=2)
	if message:
		queryset = Chat.objects.create(user_sent=send_id,user_recevied=recevied_id,message=message,sent_time=now)
	return HttpResponse(message)


class RecentChatList(generics.ListCreateAPIView):
	queryset = Person.objects.all().select_related()
	serializer_class = RecentChatSerializer

class RecentChatDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Person.objects.all().select_related()
	serializer_class = RecentChatSerializer	