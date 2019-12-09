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
    path('auth/token/obtain/', TokenObtainPairView.as_view()),
    path('auth/token/refresh/', TokenRefreshView.as_view()),
    path('auth/token/verify/', TokenVerifyView.as_view(), name='token_verify'),


]
