from django.contrib import admin
from .models import Company, Vacancy

# Optional: Customize the admin interface for Company
@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('name', 'city', 'address')  # Fields to display in the list view
    search_fields = ('name', 'city')  # Fields to search by
    list_filter = ('city',)  # Add filter sidebar for city

# Optional: Customize the admin interface for Vacancy
@admin.register(Vacancy)
class VacancyAdmin(admin.ModelAdmin):
    list_display = ('name', 'company', 'salary')  # Fields to display in the list view
    search_fields = ('name', 'company__name')  # Search by vacancy name and company name
    list_filter = ('company',)  # Add filter sidebar for company
    ordering = ('-salary',)  # Sort by salary descending by default

# If you prefer the simple registration without customization, you could just use:
# admin.site.register(Company)
# admin.site.register(Vacancy)