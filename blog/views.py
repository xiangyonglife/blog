from django.shortcuts import render

# Create your views here.


def index(request):
    """

    :param request:
    :return: 首页
    """
    return render(request, 'index.html')


def login(request):
    """

    :param request:
    :return: 登录页
    """
    return render(request, 'login.html')


def session(request):
    """

    :param request:
    :return: 后台
    """
    return render(request, 'admin.html')

