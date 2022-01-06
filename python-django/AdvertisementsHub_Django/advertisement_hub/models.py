from django.db import models

class Category(models.Model):
    def __str__(self):
        return self.name
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50)
    ordering = models.IntegerField()
    class Meta:
        verbose_name="Category"
        verbose_name_plural="Categories"


class Offer(models.Model):
    def __str__(self):
        return self.name
    category = models.ForeignKey(Category,  on_delete=models.CASCADE, null=True)
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=10000)
    price = models.DecimalField(max_digits=12, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    class Meta:
        verbose_name="Offer"
        verbose_name_plural="Offers"

