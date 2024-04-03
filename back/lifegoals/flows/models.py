from django.db import models
from django.contrib.auth.models import User


# Create your models here.


class Goal(models.Model):
    GOAL_TYPES = [
        ("I", "Important"),
        ("N", "Not Important"),
    ]
    TIME_UNITS = [
        ("M", "Month"),
        ("Y", "Year"),
    ]
    type = models.CharField(max_length=4, choices=GOAL_TYPES, default="N")
    name = models.CharField(max_length=32, null=True)
    time = models.PositiveIntegerField()
    time_unit = models.CharField(max_length=1, choices=TIME_UNITS, default="M")
    owner = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f"{self.name}"


class Flow(models.Model):
    name = models.CharField(max_length=256)
    goals = models.ManyToManyField(Goal)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
