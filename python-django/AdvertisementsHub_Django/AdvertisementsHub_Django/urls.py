
from django.contrib import admin
from django.urls import path ,include
from .router import router
# from django.conf.urls import include, url
# from advertisement_hub import views
urlpatterns = [
    path('admin/', admin.site.urls),
    #url(r'^',include('advertisement_hub.urls'))
    path('api/',include(router.urls))
]
