from django.urls import path
from blog import views
app_name = 'blog'  # 那个项目下的app
urlpatterns = [
    path('', views.index, name='index'),
    path('sing-in/', views.login, name='login'),
    path('login/', views.session, name='loginIn'),
]