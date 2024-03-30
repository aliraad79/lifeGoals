from django.contrib import admin
from .models import Flow, Node, Edge

# Register your models here.


@admin.register(Flow)
class flowAdmin(admin.ModelAdmin):
    pass


@admin.register(Node)
class nodeAdmin(admin.ModelAdmin):
    pass


@admin.register(Edge)
class edgeAdmin(admin.ModelAdmin):
    pass
