# Generated by Django 2.0.4 on 2018-04-14 05:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('texts', '0001_initial'),
        ('seals', '0008_seal_publications'),
    ]

    operations = [
        migrations.AddField(
            model_name='seal',
            name='texts',
            field=models.ManyToManyField(blank=True, to='texts.Text'),
        ),
    ]