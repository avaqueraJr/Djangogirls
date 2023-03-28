from django.conf import settings
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Post(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    text = models.TextField()
    videoSrc = models.URLField(default='')
    created_date = models.DateTimeField(default=timezone.now)
    published_date = models.DateTimeField(blank=True, null=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

class StepCounter(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    steps = models.PositiveIntegerField()
    date = models.DateField(default=timezone.now)

    def __str__(self):
        return f"{self.user.username} - {self.steps} steps on {self.date}"

class CalorieIntake(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    calories = models.PositiveIntegerField()
    date = models.DateField(default=timezone.now)

    def __str__(self):
        return f"{self.user.username} - {self.calories} calories on {self.date}"

