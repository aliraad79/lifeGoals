from .serializer import FlowSerializer
from .models import Flow
from rest_framework import viewsets
from rest_framework import mixins


# Create your views here.
class FlowViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = Flow.objects.all()
    serializer_class = FlowSerializer

    def get_queryset(self):
        print("HERE")
        return Flow.objects.filter(owner=self.request.user.id)
