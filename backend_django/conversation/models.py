
from django.db import models
from django.contrib.auth.models import User

class StudentPreferences(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    work_hours_per_week = models.IntegerField(default=20)
    class_hours_per_week = models.IntegerField(default=15)
    sleep_target_hours = models.FloatField(default=8.0)
    workout_target_hours = models.FloatField(default=3.0)
    other_commitments = models.TextField(blank=True)

    def __str__(self):
        return f"{self.user.username}'s Preferences"


class Activity(models.Model):
    CATEGORY_CHOICES = [
        ('CLASS', 'Class'),
        ('WORK', 'Work'),
        ('EXERCISE', 'Exercise'),
        ('PERSONAL', 'Personal'),
        ('SLEEP', 'Sleep'),
        ('STUDY', 'Study'),
        ('SOCIAL', 'Social'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    duration_hours = models.FloatField()
    deadline = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"{self.title} ({self.user.username})"


class GeneratedPlan(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    suggestion = models.TextField()
    generated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Plan for {self.user.username} at {self.generated_at.strftime('%Y-%m-%d %H:%M')}"
