from __future__ import unicode_literals
from django.db import models
from django.core.mail import send_mail
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import UserManager



class Person(AbstractUser):
    email = models.EmailField(_('email address'), unique=True)
    username = models.CharField(_('username'), unique=True,max_length=10)
    first_name = models.CharField(_('first name'), max_length=30, blank=True)
    last_name = models.CharField(_('last name'), max_length=30, blank=True)
    date_joined = models.DateTimeField(_('date joined'), auto_now_add=True)
    is_active = models.BooleanField(_('active'), default=True)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    class Meta:
        verbose_name = _('Person')
        verbose_name_plural = _('Persons')

    def get_full_name(self):
        '''
        Returns the first_name plus the last_name, with a space in between.
        '''
        full_name = '%s %s' % (self.first_name, self.last_name)
        return full_name.strip()

    def get_username(self):
        '''
        Returns the short name for the user.
        '''
        return self.username


class Chat(models.Model):
	user_sent = models.ForeignKey(Person,related_name='Sender',on_delete=models.CASCADE)
	user_recevied = models.ForeignKey(Person,related_name='Reciever',on_delete=models.CASCADE)
	message = models.CharField(_('Message'),max_length=500)
	sent_time = models.DateTimeField(_('Send at'),auto_now_add=True)
	delivered_time = models.DateTimeField(_('Delivered at'),null=True,blank=True)


	def __str__(self):
		return str(self.user_sent)



class GroupChat(models.Model):
	group_name = models.CharField(_('Group Name'),max_length=100)
	group_created = models.DateTimeField(_('Created at'),auto_now_add=True)
	group_created_by = models.ForeignKey(Person,on_delete=models.CASCADE)
	user = models.ManyToManyField(Person,_('User'))
	chat = models.ManyToManyField(Chat,_('Message'),blank=True)


	def __str__(self):
		return self.group_name





