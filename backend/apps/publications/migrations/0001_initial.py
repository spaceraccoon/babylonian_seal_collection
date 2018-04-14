# Generated by Django 2.0.4 on 2018-04-14 02:36

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import isbn_field.fields
import isbn_field.validators


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Publication',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('author', models.CharField(blank=True, max_length=255)),
                ('year', models.PositiveSmallIntegerField(blank=True, null=True)),
                ('isbn', isbn_field.fields.ISBNField(blank=True, max_length=255, validators=[isbn_field.validators.ISBNValidator], verbose_name='ISBN')),
                ('creator', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='publications', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]