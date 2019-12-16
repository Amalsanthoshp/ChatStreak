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
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import authentication, permissions
from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer, UserSerializerWithToken




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
	authentication_classes = (TokenAuthentication)


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
	send_by = body['send_by']
	receive_by = body['receive_by']
	now = timezone.now()
	send_id = Person.objects.get(id=send_by)
	recevied_id = Person.objects.get(id=receive_by)
	if message:
		queryset = Chat.objects.create(user_sent=send_id,user_recevied=recevied_id,message=message,sent_time=now)
	return HttpResponse(message)


class RecentChatList(generics.ListCreateAPIView):
	queryset = Person.objects.all().select_related()
	serializer_class = RecentChatSerializer

class RecentChatDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Person.objects.all().select_related()
	serializer_class = RecentChatSerializer	




@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """
    
    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class UserList(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """

    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)	

def LogOut(request):
	user = request.user
	return HttpResponse(user.username)

