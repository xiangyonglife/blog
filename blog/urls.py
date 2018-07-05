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
    path('get-write-tag-others/', views.load_article_tag_category, name='get_tag_category'),
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
    path('modify-wz-sm/', views.modify_wz_sm, name='modify_wz_sm'),
    path('modify-wz-cancel_push/', views.modify_wz_cancel_push, name='modify_wz_cancel_push'),
    path('write-history/', views.article_history, name='history'),
    path('history-cancel/', views.article_cancel, name='cancel'),
    path('history-recover/', views.article_recover, name='recover'),
    path('push-article/', views.push_article, name='push'),
    path('push-article_update/', views.push_article_update, name='push_update'),
    path('article-show/', views.push_article, name='article-show'),
    path('article-detail-<article_id>.html/', views.article_detail, name='article-detail'),
    path('index-bar/', views.index_bar, name='index-bar'),
    path('article_comments/', views.article_comments, name='comments'),
]
