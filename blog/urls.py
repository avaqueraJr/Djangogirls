from django.urls import path
from . import views
from views import HybridNewsFeedView

urlpatterns = [
    path('posts/', views.PostList.as_view(), name='post_list'),  # Use PostList.as_view() instead of post_list
    path('hybridnewsfeed/', HybridNewsFeedView.as_view(), name='hybridnewsfeed'),

]
