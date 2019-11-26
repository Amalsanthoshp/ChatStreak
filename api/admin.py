from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(Person)
admin.site.register(Chat)
admin.site.register(GroupChat)

class GroupChatAdmin(admin.ModelAdmin):
    list_display = ('user','chat','group_name')