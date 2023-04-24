from rest_framework import serializers
from .models import Post, StepCounter, CalorieIntake
from django.contrib.auth.models import User

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

class StepCounterSerializer(serializers.ModelSerializer):
    class Meta:
        model = StepCounter
        fields = '__all__'

class CalorieIntakeSerializer(serializers.ModelSerializer):
    class Meta:
        model = CalorieIntake
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name']

