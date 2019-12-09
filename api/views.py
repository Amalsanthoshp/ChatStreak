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



from django.shortcuts import render

# Create your views here.
from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer, UserSerializerWithToken


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

def Test(request):
    return HttpResponse("hello")

