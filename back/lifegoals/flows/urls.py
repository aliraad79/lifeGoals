from django.urls import path, include
from rest_framework import routers
from .views import FlowViewSet

router = routers.DefaultRouter()
router.register(r"flows", FlowViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
