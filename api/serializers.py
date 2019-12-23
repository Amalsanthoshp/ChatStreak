from rest_framework import serializers
from .models import *
from django.db.models import Q
from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from api.models import Person
from django.http import JsonResponse
from django.forms.models import model_to_dict
import json





class MessageSerializer(serializers.ModelSerializer):
	# Sentmessages = serializers.SerializerMethodField('get_SentMessage')
	# Receivedmessage =serializers.SerializerMethodField('get_ReceivedMessage')
	class Meta:
		fields = '__all__'
		model = Chat

	# def get_SentMessage(self,obj):
	# 	return Chat.objects.filter(user_sent_id=obj.id).values()
	# def get_ReceivedMessage(self,obj):
	# 	return Chat.objects.filter(user_recevied_id=obj.id).values()






class RecentChatSerializer(serializers.ModelSerializer):
	recentMessages_ReceivedAndSend = serializers.SerializerMethodField('get_recentMessageRandS')
	class Meta:
		fields= ['username','recentMessages_ReceivedAndSend']
		model = Person

	def get_recentMessageRandS(self,obj):
		query = Chat.objects.filter(Q(user_recevied=obj.id) | Q(user_sent=obj.id)).order_by('-sent_time')
		queryset = []
		messageRandSlist = list()
		messageRandSset = set()
		id_list = []
		for q1 in query:
			messageRandSlist.append((q1.user_sent_id,q1.user_recevied_id ))
			messageRandSset = set(messageRandSlist)
		
		for q2 in query:
			if tuple((q2.user_sent_id ,q2.user_recevied_id)) in messageRandSset:
				queryset.append(q2)
				try:
					messageRandSset.remove(tuple((q2.user_sent_id,q2.user_recevied_id)))
					messageRandSset.remove(tuple((q2.user_recevied_id,q2.user_sent_id)))
				except KeyError:
					continue


		for ids in queryset:
			id_list.append(ids.id)

		return Chat.objects.filter(pk__in=id_list).order_by('-sent_time').values()



class PersonSerializer(serializers.ModelSerializer):
	recentMessages_ReceivedAndSend = serializers.SerializerMethodField('get_recentMessageRandS')
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

	def get_recentMessageRandS(self,obj):
		query = Chat.objects.filter(Q(user_recevied=obj.id) | Q(user_sent=obj.id)).order_by('-sent_time')
		queryset = []
		messageRandSlist = list()
		messageRandSset = set()
		id_list = []
		for q1 in query:
			messageRandSlist.append((q1.user_sent_id,q1.user_recevied_id ))
			messageRandSset = set(messageRandSlist)
			
		for q2 in query:
			if tuple((q2.user_sent_id ,q2.user_recevied_id)) in messageRandSset:
				queryset.append(q2)
				try:
					messageRandSset.remove(tuple((q2.user_sent_id,q2.user_recevied_id)))
					messageRandSset.remove(tuple((q2.user_recevied_id,q2.user_sent_id)))
				except KeyError:
					continue


		for ids in queryset:
			id_list.append(ids.id)

		return Chat.objects.filter(pk__in=id_list).order_by('-sent_time').values()



class GroupSerializer(serializers.ModelSerializer):

	sender= serializers.SerializerMethodField('get_sender')
	
	class Meta:
		fields = '__all__'
		model = GroupChat

	def get_sender(self,obj):
		return GroupChat.objects.user.values()



class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = Person
        fields = ('id','username','password')


class UserSerializerWithToken(serializers.ModelSerializer):

    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = Person
        fields = ('token', 'username', 'password')

