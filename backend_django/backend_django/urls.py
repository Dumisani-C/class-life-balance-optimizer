"""
URL configuration for backend_django project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from conversation.views import dummy_plan
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from conversation.views import (
    StudentPreferencesViewSet,
    ActivityViewSet,
    GeneratedPlanViewSet,
    GeneratePlanView,
)

# Register viewsets with DRF router
router = DefaultRouter()
router.register(r'preferences', StudentPreferencesViewSet)
router.register(r'activities', ActivityViewSet)
router.register(r'plans', GeneratedPlanViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/generate-plan/', GeneratePlanView.as_view(), name='generate-plan'),
    path('api/test-dummy/', dummy_plan, name='test-dummy'),
]
    


