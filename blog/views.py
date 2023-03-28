from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Q
from itertools import chain
from django.utils import timezone
from .models import Post, StepCounter, CalorieIntake
from .serializers import PostSerializer, StepCounterSerializer, CalorieIntakeSerializer
from django.views.generic import TemplateView
from django.http import HttpResponse
from django.conf import settings
import os

class FrontendAppView(TemplateView):
    def get_template_names(self):
        template_name = "index.html"
        return [template_name]
    
    def get(self, request, *args, **kwargs):
        try:
            with open(os.path.join(settings.BASE_DIR, 'frontend', 'build', 'index.html' )) as file:
                return HttpResponse(file.read())
        except FileNotFoundError:
            return HttpResponse("File not found", content_type='text/plain', status=500)

class PostList(generics.ListAPIView):
    queryset = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    serializer_class = PostSerializer

class PostListCreate(generics.ListCreateAPIView):
    queryset = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    serializer_class = PostSerializer

class StepCounterListCreate(generics.ListCreateAPIView):
    queryset = StepCounter.objects.all()
    serializer_class = StepCounterSerializer

class CalorieIntakeListCreate(generics.ListCreateAPIView):
    queryset = CalorieIntake.objects.all()
    serializer_class = CalorieIntakeSerializer

class HybridNewsFeedView(APIView):
    def get(self, request, *args, **kwargs):
        user = request.user

        user_stepcounter = StepCounter.objects.filter(user=user)
        user_calorieintake = CalorieIntake.objects.filter(user=user)

        other_creators_posts = Post.objects.exclude(author=user).filter(published_date__lte=timezone.now()).order_by('published_date')

        combined_feed = sorted(
            chain(user_stepcounter, user_calorieintake, other_creators_posts),
            key=lambda x: x.date if hasattr(x, 'date') else x.published_date,
            reverse=True
        )

        stepcounter_serializer = StepCounterSerializer(user_stepcounter, many=True)
        calorieintake_serializer = CalorieIntakeSerializer(user_calorieintake, many=True)
        post_serializer = PostSerializer(other_creators_posts, many=True)

        response_data = {
            'stepcounter': stepcounter_serializer.data,
            'calorieintake': calorieintake_serializer.data,
            'posts': post_serializer.data,
        }
        return Response(response_data)

def index(request):
    return render(request, 'index.html')


