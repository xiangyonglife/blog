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
    path('get-write/', views.load_article, name='get_article'),
    path('sign-out/', views.logout, name='out'),
    path('write-category/', views.new_category, name='category'),
    path('write-article/', views.new_article, name='article'),
    path('push-option-category/', views.option_one_blog_category, name='option_category'),
    path('save-current/', views.save_current, name='save_current'),
    path('save-current_title/', views.save_current_title, name='save_current_title'),
    path('get-xz-article/', views.load_xz_article, name='get_xz_article'),
    path('modify-wj-name/', views.modify_wj_name, name='modify_wj_name'),
    path('modify-wj-del/', views.modify_wj_del, name='modify_wj_del'),
    path('modify-wz-move/', views.modify_wz_move, name='modify_wz_move'),
    path('modify-wz-del/', views.modify_wz_del, name='modify_wz_del'),
]
