from .models import Flow, Goal
from rest_framework import serializers


class GoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Goal
        fields = ["name", "duration"]


class FlowSerializer(serializers.ModelSerializer):
    goals = GoalSerializer(many=True, read_only=True)

    class Meta:
        model = Flow
        fields = ["name", "goals"]
