# Generated by Django 5.0.3 on 2024-03-31 18:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("flows", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="goal",
            name="duration",
            field=models.CharField(default="5 years", max_length=128),
        ),
    ]