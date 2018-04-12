# Generated by Django 2.0.4 on 2018-04-03 20:34

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Seal',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=255)),
                ('cdli_number', models.CharField(blank=True, max_length=255)),
                ('museum_number', models.CharField(blank=True, max_length=255)),
                ('accession_number', models.CharField(blank=True, max_length=255)),
                ('publication_number', models.CharField(blank=True, max_length=255)),
                ('collection', models.CharField(blank=True, max_length=255)),
                ('height', models.FloatField(blank=True, null=True)),
                ('thickness', models.FloatField(blank=True, null=True)),
                ('width', models.FloatField(blank=True, null=True)),
                ('weight', models.FloatField(blank=True, null=True)),
                ('drill_hole_diameter', models.FloatField(blank=True, null=True)),
                ('perforations', models.CharField(blank=True, max_length=255)),
                ('surface_preservation', models.IntegerField(blank=True, choices=[(0, 'Poor'), (1, 'Fair'), (2, 'Good'), (3, 'Excellent')], null=True)),
                ('condition', models.TextField(blank=True)),
                ('is_recarved', models.NullBooleanField()),
                ('physical_remarks', models.TextField(blank=True)),
                ('provenance', models.TextField(blank=True)),
                ('provenance_remarks', models.TextField(blank=True)),
                ('excavation_number', models.CharField(blank=True, max_length=255)),
                ('design', models.CharField(blank=True, choices=[('FIGURATIVE', 'Figurative'), ('GEOMETRIC', 'Geometric')], max_length=10)),
                ('design_remarks', models.TextField(blank=True)),
                ('creator', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='seals', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]