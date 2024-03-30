from django.db import models


# Create your models here.


class Node(models.Model):
    Node_TYPES = [
        ("actorNode", "Actor Node"),
        ("trohpyNode", "Trohpy Node"),
    ]
    type = models.CharField(max_length=128, choices=Node_TYPES)
    name = models.CharField(max_length=32, null=True)

    def __str__(self) -> str:
        return f"{self.name}"


class Edge(models.Model):
    start = models.ForeignKey(Node, on_delete=models.CASCADE, related_name="start")
    end = models.ForeignKey(Node, on_delete=models.CASCADE, related_name="end")
    label = models.CharField(max_length=128)

    def __str__(self) -> str:
        return f"{self.label} {self.start}->{self.end}"


class Flow(models.Model):
    name = models.CharField(max_length=256)
    nodes = models.ManyToManyField(Node)
    edges = models.ManyToManyField(Edge)
