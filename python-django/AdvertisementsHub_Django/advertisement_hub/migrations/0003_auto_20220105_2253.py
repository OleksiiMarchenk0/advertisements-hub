# Generated by Django 3.2.11 on 2022-01-05 22:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('advertisement_hub', '0002_auto_20220105_2243'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='offer',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]
