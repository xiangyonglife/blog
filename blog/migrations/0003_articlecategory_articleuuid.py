# Generated by Django 2.0.6 on 2018-06-18 11:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_auto_20180615_0855'),
    ]

    operations = [
        migrations.AddField(
            model_name='articlecategory',
            name='articleUuid',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
