from .serializer import FlowSerializer
from .models import Flow
from rest_framework import viewsets


# Create your views here.
class FlowViewSet(viewsets.ModelViewSet):
    queryset = Flow.objects.all()
    serializer_class = FlowSerializer
