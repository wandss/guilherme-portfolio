from django.contrib import admin
from .models import PhotoAlbum, Image

class ImageAdmin(admin.ModelAdmin):
    list_display = ('name', 'create_date',)

admin.site.register(PhotoAlbum)
admin.site.register(Image, ImageAdmin)

