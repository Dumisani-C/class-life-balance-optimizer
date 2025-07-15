from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from django.contrib.auth.models import User



from .models import StudentPreferences, Activity, GeneratedPlan
from .serializers import (
    StudentPreferencesSerializer,
    ActivitySerializer,
    GeneratedPlanSerializer,
)
from .genai import get_ai_schedule


class GeneratePlanView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        from django.contrib.auth import get_user_model
        User = get_user_model()
        user = User.objects.first()  # just grab first user for testing


        # Get user preferences
        try:
            prefs = StudentPreferences.objects.get(user=user)
        except StudentPreferences.DoesNotExist:
            return Response(
                {"error": "Student preferences not found."},
                status=status.HTTP_404_NOT_FOUND,
            )

        # Get all user's activities
        activities = Activity.objects.filter(user=user)
        serialized_activities = ActivitySerializer(activities, many=True).data

        # Generate plan with Gemini
        response_text = get_ai_schedule(prefs, serialized_activities)

        # Save and return plan
        plan = GeneratedPlan.objects.create(user=user, suggestion=response_text)
        return Response(
            GeneratedPlanSerializer(plan).data,
            status=status.HTTP_201_CREATED,
        )


from rest_framework import viewsets
from .models import StudentPreferences, Activity, GeneratedPlan
from .serializers import StudentPreferencesSerializer, ActivitySerializer, GeneratedPlanSerializer

class StudentPreferencesViewSet(viewsets.ModelViewSet):
    queryset = StudentPreferences.objects.all()
    serializer_class = StudentPreferencesSerializer

class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

class GeneratedPlanViewSet(viewsets.ModelViewSet):
    queryset = GeneratedPlan.objects.all()
    serializer_class = GeneratedPlanSerializer

