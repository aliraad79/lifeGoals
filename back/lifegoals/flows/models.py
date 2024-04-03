from django.db import models
from django.contrib.auth.models import User


# Create your models here.


class Goal(models.Model):
    GOAL_TYPES = [
        
        ("I", "Important"),
        ("N", "Not Important"),
    ]
    type = models.CharField(max_length=4, choices=GOAL_TYPES)
    name = models.CharField(max_length=32, null=True)
    duration = models.CharField(max_length=128, default='5 years')

    def __str__(self) -> str:
        return f"{self.name}"


class Flow(models.Model):
    name = models.CharField(max_length=256)
    goals = models.ManyToManyField(Goal)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
