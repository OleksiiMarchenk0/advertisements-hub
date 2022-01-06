from django.conf.urls import url
from advertisement_hub import views
urlpatterns=[
   url(r'^category/$', views.categoryApi),
   url(r'^category/([0-9]+)',views.categoryApi),
   url(r'^offers/$', views.offersApi),
   url(r'^offers/([0-9]+)',views.offersApi),
]