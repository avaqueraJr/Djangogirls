from django.urls import path, include
from . import views
from blog.views import HybridNewsFeedView

urlpatterns = [
    path('posts/', views.PostListCreate.as_view(), name='post_list_create'),
    path('stepcounter/', views.StepCounterListCreate.as_view(), name='stepcounter_list_create'),
    path('calorieintake/', views.CalorieIntakeListCreate.as_view(), name='calorieintake_list_create'),
    path('hybrid-news-feed/', views.HybridNewsFeedView.as_view(), name='hybrid_news_feed'),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls'))
]
