from django.db import models
from django.utils import timezone


class Order(models.Model):
    name = models.CharField(max_length=200, verbose_name="નામ")
    mobile = models.CharField(max_length=15, verbose_name="મોબાઇલ નંબર")
    address = models.TextField(verbose_name="સરનામું")
    pincode = models.CharField(max_length=10, verbose_name="પિનકોડ")
    created_at = models.DateTimeField(default=timezone.now, verbose_name="ઓર્ડર તારીખ")
    status = models.CharField(
        max_length=20,
        choices=[
            ('pending', 'Pending'),
            ('confirmed', 'Confirmed'),
        ],
        default='pending',
        verbose_name="સ્થિતિ"
    )

    class Meta:
        verbose_name = "ઓર્ડર"
        verbose_name_plural = "ઓર્ડર્સ"
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.name} - {self.mobile} ({self.created_at.strftime('%Y-%m-%d %H:%M')})"
