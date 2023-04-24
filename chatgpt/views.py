from django.shortcuts import render

# Create your views here.
import openai
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from django.views.decorators.http import require_http_methods

openai.api_key = settings.OPENAI_API_KEY

@csrf_exempt
@require_http_methods(["POST"])
def chat(request):
    input_data = request.POST.get('input_data')
    response = openai.Completion.create(
        engine="text-davinci-codex",
        prompt=f"{input_data}",
        max_tokens=50,
        n=1,
        stop=None,
        temperature=0.5,
    )

    return JsonResponse({"response": response.choices[0].text.strip()})
