# todos/serializers.py
from rest_framework import serializers
from .models import *
from django.db.models import Q


class MessageSerializer(serializers.ModelSerializer):

	class Meta:
		fields = '__all__'
		model = Chat

class PersonSerializer(serializers.ModelSerializer):
	message_send = serializers.SerializerMethodField('get_messageSent')
	message_recieved = serializers.SerializerMethodField('get_messageRecieved')
	message_recieved_count = serializers.SerializerMethodField('get_messageRecievedCount')
	class Meta:
		fields = '__all__'
		model = Person

	def get_messageSent(self, obj):
		return Chat.objects.filter(user_sent=obj.id).values()
	def get_messageRecieved(self, obj):
			return Chat.objects.filter(user_recevied=obj.id).values()

	def get_messageRecievedCount(self,obj):
		return Chat.objects.filter(user_recevied=obj.id,delivered_time__isnull=True).count()

class GroupSerializer(serializers.ModelSerializer):

	sender= serializers.SerializerMethodField('get_sender')
	
	class Meta:
		fields = '__all__'
		model = GroupChat

	def get_sender(self,obj):
		return GroupChat.objects.user.values()

