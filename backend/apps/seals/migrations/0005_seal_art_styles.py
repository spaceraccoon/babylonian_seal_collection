# Generated by Django 2.0.4 on 2018-04-11 19:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('art_styles', '0001_initial'),
        ('seals', '0004_seal_scenes'),
    ]

    operations = [
        migrations.AddField(
            model_name='seal',
            name='art_styles',
            field=models.ManyToManyField(to='art_styles.ArtStyle'),
        ),
    ]
