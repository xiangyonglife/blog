# Generated by Django 2.0.6 on 2018-06-21 09:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0007_auto_20180621_1719'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='fatherComment',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='blog.Comment'),
        ),
    ]
