from django.contrib import admin
from .models import Flow, Goal

# Register your models here.


@admin.register(Flow)
class FlowAdmin(admin.ModelAdmin):
    pass


@admin.register(Goal)
class GoalAdmin(admin.ModelAdmin):
    pass
