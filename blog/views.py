from django.shortcuts import render, redirect, HttpResponse, render_to_response
from blog import models
import json
from django.core import exceptions
import pickle
from blog.utils import mongodb_con


# Create your views here.
def index(request):
    """
    首页
    :param request:
    :return: 首页
    """
    # 获取当前用户随机字符串
    # 根据随机字符串获取对应信息
    user = request.session.get('is_sign')
    print(user)
    # request.session.clear_expired() 江所有session失效日期小于当前日期删除
    # request.session.clear() #注销的时候使用
    return render(request, 'home_main.html', {'user': user})


def login_index(request):
    """
    跳转登录首页
    :param request:
    :return: 登录页
    """

    return render(request, 'front/login_sign_in.html')


def login(request):
    """
    用户登录
    :param request:
    :return:首页
    """
    user_name = request.POST.get('user-name')
    user_pwd = request.POST.get('user-pwd')
    user = models.User.objects.filter(userName=user_name, pwd=user_pwd).first()
    if user:
        text_json = {'code': '0', 'msg': '登录成功回首页'}
        # 生成随机字符串
        # 写到浏览器Cookies
        # 写到session
        # 在随机字符串对应字典中设置相关内容
        remember_me = request.POST.get('remember-me')
        # user_pickle = pickle.dumps(user) 江任意数据类型转换为btyts
        # json.dumps(user)可以将任意数据类型转换为json
        # user_dic = user.__dict__
        # user_json = json.dumps(user, default=lambda user: user.__dict__)  # 对象转换json
        # user_dic_state = user_dic['ModelState']
        # user_json = json.dumps(user_dic)
        # print(user_json)
        request.session['user'] = user.userName
        request.session['is_sign'] = True
        # 用户选择是否记住密码，记住一个月免登录，否则浏览器关闭就要登录
        if remember_me:
            request.session.set_expiry(60 * 60 * 24 * 30)
        return HttpResponse(json.dumps(text_json))
    else:
        text_json = {'code': '1', 'msg': '用户名或密码错误'}
        return HttpResponse(json.dumps(text_json))


# 用户装饰器
def auth(func):
    def inner(request, *args, **kwargs):
        is_sign = request.session.get("is_sign")
        if not is_sign:
            return redirect('blog:in')
        return func(request, *args, **kwargs)

    return inner


def logout(request):
    """
    退出登录
    :param request:
    :return:首页
    """
    request.session.clear()  # 清除sessionid日期小于当前日期的session
    request.session.flush()  # 删除当前的会话数据和会话cookie
    return redirect('/')


def register_index(request):
    """
    跳转注册页
    :param request:
    :return:
    """
    return render(request, 'front/login_register.html')


def register(request):
    """
    ajax 注册验证
    :param request:
    :return: 验证信息
    """
    user_name = request.POST.get('user-name')
    user_phone = request.POST.get('user-phone')
    user_pwd = request.POST.get('user-pwd')
    user_count = models.User.objects.filter(userName=user_name).count()
    if user_count > 0:
        json_text = {'code': '1', 'msg': '昵称已被使用,换一个吧'}
        return HttpResponse(json.dumps(json_text))
    else:
        user = models.User(
            userName=user_name,
            pwd=user_pwd,
        )
        user.save()

        models.UserInfo.objects.create(
            userPhone=user_phone,
            user=user
        )
        json_text = {'code': '0', 'msg': '注册成功点击登录'}
        return HttpResponse(json.dumps(json_text))


@auth
def write_article(request):
    """
    跳转写文章页
    :param request:
    :return: 文章页
    """
    # 根据登录用户展示用户类目
    user = request.session.get("user")
    category = models.ArticleCategory.objects.filter(user__userName=user)
    # django 默认无法解析html会把它转义字符要用这个 {% autoescape off %}才能正常显示
    # 获取当前用户类目下的文章
    # article = models.Article.objects.filter(articleCategory__articleCategoryId=category.articleCategoryId)
    # 获取博客分类
    blog_category = models.ArticleBlogCategory.objects.all()
    return render(request, 'write_article.html', {'category': category, "blog_category": blog_category})


def option_one_blog_category(request):
    """
    选择文章一级类目
    :param request:
    :return: 联动加载二级类目
    """
    one_category_id = request.POST.get("one-category")
    # 数据库通过一级获取二级
    blog_two_cateogry = models.ArticleBlogCategoryTwo.objects.filter(
        ArticleBlogCategory__articleBlogCategoryId=one_category_id)
    category_list = []
    for item in blog_two_cateogry:
        category_list.append({'id': item.articleBlogCategoryId, 'name': item.articleBlogCategoryTwo})
    json_text = {'code': '0', 'msg': '创建文集成功', "data": category_list}
    return HttpResponse(json.dumps(json_text))


@auth
def new_category(request):
    """
    用户新建类目
    :param request:
    :return: 成功与否
    """
    category_name = request.POST.get("category_name")
    template = request.POST.get("template")
    user_sign = request.session.get("user")
    user = models.User.objects.filter(userName=user_sign).first()
    obj = models.ArticleCategory(
        articleCategoryName=category_name,
        articleTemplate=template,
        user=user
    )
    obj.save()
    json_text = {'code': '0', 'msg': '创建文集成功'}
    return HttpResponse(json.dumps(json_text))


def new_article(request):
    """
    新建文章
    :param request:
    :return:
    """
    title = request.POST.get("title")
    title_html = request.POST.get("title_html")
    content_html = request.POST.get("content_html")
    parent_article_id = request.POST.get("parent_article_id")
    uid = request.POST.get("uid")
    # saveType 0新建 1自动保存，2，发布跟新，3.公开发布
    article = {"parent_article_id": parent_article_id, 'title': title, 'title_html': title_html,
               'content': content_html, 'saveType': 0, "article_uid": uid}
    mongodb_con.article.insert(article)
    json_text = {'code': '0', 'msg': '创建文集成功'}
    return HttpResponse(json.dumps(json_text))


def load_article(request):
    """
    异步加载类目下文章内容
    :param request:
    :return:
    """
    parent_category_id = request.GET.get("parent_category_id")
    article = mongodb_con.article.find({"parent_article_id": parent_category_id})
    article_list = []
    for item in article:
        print(item)
        article_list.append(item)
    json_text = {'code': '0', 'msg': '成功返回', "data": mongodb_con.dumps(article_list)}
    return HttpResponse(json.dumps(json_text))


def save_current(request):
    """
    编辑文章时刻保存
    :param request:
    :return:
    """
    article_id = request.POST.get("article_id")
    article_content = request.POST.get("article_content")
    title = request.POST.get("title")
    # 找到当前文章并且跟新内容
    mongodb_con.article.update({'article_uid': article_id},
                               {'$set': {'content': article_content, "saveType": 1, "title": title}})
    json_text = {'code': '0', 'msg': '跟新成功'}
    return HttpResponse(json.dumps(json_text))


def save_current_title(request):
    """
    编辑时刻保存标题
    :param request:
    :return:
    """
    article_id = request.POST.get("article_id")
    title = request.POST.get("title")
    # 找到当前文章并且跟新内容
    mongodb_con.article.update({'article_uid': article_id},
                               {'$set': {"saveType": 1, "title": title}})
    json_text = {'code': '0', 'msg': '跟新成功'}
    return HttpResponse(json.dumps(json_text))


def load_xz_article(request):
    """
    加载选中的文章内容
    :param request:
    :return:
    """
    article_id = request.GET.get("article_id")
    print(type(article_id))
    # 找到当前文章并且加载
    article = mongodb_con.article.find_one({"article_uid": article_id})
    json_text = {'code': '0', 'msg': '成功返回', "data": mongodb_con.dumps(article)}
    return HttpResponse(json.dumps(json_text))


def push_article(request):
    """
    发布文章
    :param request:
    :return:
    """

    return 'sfsf'


def page_error(request):
    """
    错误页面
    :param request:
    :return:
    """
    # 全局404处理函数
    print(111)
    return render_to_response('error_msg.html')


def session(request):
    """
    :param request:
    :return: 后台
    """
    # 数据裤操作基本增删改查--------

    # 增加
    #  #方式一
    #  admin = models.User(
    #      userName='admin',
    #      pwd='admin',
    #  )
    #  admin.save()
    #  #方式二
    #  models.User.objects.create(
    #      userName='root',
    #      pwd='root'
    #  )
    # #方式三
    #  dic = {'userName':'tiger','pwd':'tiger'}
    #  models.User.objects.create(**dic)

    # 查询
    # result = models.User.objects.all()   #查询所有返回对象列表
    # result = models.User.objects.all().filter(id=1)  #基本查询条件(条件数据库有的字段)
    # result = models.User.objects.all().filter(id=1,userName='admin') #多条件and并列

    # 删除
    # models.User.objects.all().filter(id=1).delete()  #删除id为1的用户

    # 更新
    # models.User.objects.all().update(pwd='999') #把密码全部更新
    # models.User.objects.filter(id=2).update(pwd='admin')  #更新id为二用户密码
    # for row in result:
    #     print(row.id , row.userName , row.pwd)

    # 实现登录
    # obj= models.User.objects.filter(userName='param',pwd='param')  #实现登录参数就是用户表单传过来的参数 没有返回一个空列表【】
    # obj =models.User.objects.filter(userName='param',pwd='param').first() #查询第一条结果有返回一个模型对象没有就返回None
    # models.User.objects.filter(userName='param',pwd='param').count() #查询当前对象个数没有为0有就是多少个
    # print(obj)
    print('11111111')
    return render(request, 'login/login.html')
