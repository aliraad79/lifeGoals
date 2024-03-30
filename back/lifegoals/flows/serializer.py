from .models import Flow
from rest_framework import serializers


class FlowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flow
        fields = "__all__"
