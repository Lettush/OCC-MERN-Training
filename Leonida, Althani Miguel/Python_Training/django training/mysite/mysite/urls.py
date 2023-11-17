"""
URL configuration for mysite project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from myapp.views import PersonListView, PersonDetailView
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls.static import static
from myapp.views import PersonListView, PersonDetailView, PersonCreateView, PersonUpdateView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', PersonListView.as_view(), name="person_list_view"),
    path('<int:pk>', PersonDetailView.as_view(), name="person_detail_view"),
    path('create/', PersonCreateView.as_view(), name="person_create_view"),
    path('<int:pk>/update', PersonUpdateView.as_view(), name="person_update_view")
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)