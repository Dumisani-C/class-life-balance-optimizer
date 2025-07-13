from rest_framework import serializers
from django.contrib.auth.models import User
from .models import StudentPreferences, Activity, GeneratedPlan


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']


class StudentPreferencesSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = StudentPreferences
        fields = '__all__'


class ActivitySerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Activity
        fields = '__all__'


class GeneratedPlanSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = GeneratedPlan
        fields = '__all__'
