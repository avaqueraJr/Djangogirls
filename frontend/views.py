from django.shortcuts import render

# Create your views here.
from django.http import FileResponse
from django.conf import settings
import os

def index(request):
    file_path = os.path.join(settings.BASE_DIR, 'new-frontend/dist/index.html')
    return FileResponse(open(file_path, 'rb'))
