# Generated by Django 2.0.6 on 2018-06-13 19:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0005_auto_20180613_2106'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='articlecategory',
            options={'ordering': ['-articleCategoryId']},
        ),
    ]
