# Generated by Django 2.0.6 on 2018-06-15 00:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='articleName',
            field=models.CharField(max_length=128, null=True),
        ),
        migrations.AlterField(
            model_name='article',
            name='articleUrl',
            field=models.URLField(null=True),
        ),
    ]