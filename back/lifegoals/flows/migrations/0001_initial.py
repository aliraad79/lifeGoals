# Generated by Django 5.0.3 on 2024-03-30 14:05

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Edge",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("label", models.CharField(max_length=128)),
            ],
        ),
        migrations.CreateModel(
            name="Node",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("type", models.CharField(max_length=128)),
                ("name", models.CharField(max_length=128, null=True)),
            ],
        ),
        migrations.CreateModel(
            name="Flow",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=256)),
                (
                    "edges",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="flows.edge"
                    ),
                ),
                (
                    "nodes",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="flows.node"
                    ),
                ),
            ],
        ),
        migrations.AddField(
            model_name="edge",
            name="end",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="end",
                to="flows.node",
            ),
        ),
        migrations.AddField(
            model_name="edge",
            name="start",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="start",
                to="flows.node",
            ),
        ),
    ]
