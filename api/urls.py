"""app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from rest_framework_jwt.views import obtain_jwt_token,refresh_jwt_token,verify_jwt_token

from django.contrib.auth import views as auth_views
from .views import current_user, UserList
from .views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,TokenVerifyView)


urlpatterns = [
    path('current_user/', current_user),
    path('users/', UserList.as_view()),
    path('home/',home,name='home'),
    path('',chat_screen,name='chat'),
    path('login/', auth_views.LoginView.as_view(template_name='registration/login.html')),
    path('chat/', ListUser.as_view()),
    path('chat/<int:pk>/',DetailUser.as_view()),
    path('group_chat/',ListGroup.as_view()),
    path('message_send/',message_send,name='message_send'),
    path('recent/', RecentChatList.as_view(),name='recent_chat_list'),
    path('recent/<int:pk>/', RecentChatDetail.as_view(),name='recent_chat_detail'),
    path('token-auth/', obtain_jwt_token),
    path('token-refresh/', refresh_jwt_token),
    path('token-verify/',verify_jwt_token),
    path('logout/',LogOut),
    path('feed_delete/<int:pk>/',FeedDeleteView),
    path('messages/<int:pk>/',ChatMessageView.as_view()),
    path('search/<slug:search_str>/',SearchUserView.as_view()),
    path('test/',userLogin)


]
