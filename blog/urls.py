from django.urls import path
from blog import views

app_name = 'blog'  # 那个项目下的app
urlpatterns = [
    path('', views.index, name='index'),
    path('sign-in/', views.login_index, name='in'),
    path('login/', views.login, name='login'),
    path('sign-up/', views.register_index, name='up'),
    path('register/', views.register, name='register'),
    path('write/', views.write_article, name='write')
]
