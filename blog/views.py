from django.shortcuts import render, redirect, HttpResponse
from blog import models
import json


# Create your views here.


def index(request):
    """
    首页
    :param request:
    :return: 首页
    """
    return render(request, 'home_main.html')


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
        return HttpResponse(json.dumps(text_json))
    else:
        text_json = {'code': '1', 'msg': '用户名或密码错误'}
        return HttpResponse(json.dumps(text_json))


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
    obj = models.User.objects.filter(userName=user_name)
    jsong_text = {}
    if len(obj) > 0:
        json_text = {'code': '0', 'msg': '昵称已被使用,换一个吧'}
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


def write_article(request):
    """
    跳转写文章页
    :param request:
    :return: 文章页
    """
    return render(request, 'write_article.html')


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
