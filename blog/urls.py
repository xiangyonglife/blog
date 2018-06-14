from django.urls import path
from blog import views
from django.conf.urls import url

app_name = 'blog'  # 那个项目下的app
urlpatterns = [
    # url(r'^\w+$', views.index, name='index'),
    # url(r'^$', views.index, name='index'),
    path('', views.index, name='index'),
    path('sign-in/', views.login_index, name='in'),
    path('login/', views.login, name='login'),
    path('sign-up/', views.register_index, name='up'),
    path('register/', views.register, name='register'),
    path('write/', views.write_article, name='write'),
    path('sign-out/', views.logout, name='out'),
    path('write-category/', views.new_category, name='category'),
    path('write-category/', views.new_category, name='category'),
]
