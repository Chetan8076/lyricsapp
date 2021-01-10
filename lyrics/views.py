from django.http import HttpResponse,HttpResponseRedirect
from django.shortcuts import render
import json


def helloWorld(request):
	return render(request,'index.html')


def jsonResponse(request):
	x = {
	  "name": "John",
	  "age": 30,
	  "city": "New York"
	}
	y= json.dumps()
	return jsonResponse(y)