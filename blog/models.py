"""
:author 向勇
数据库模型
"""
from django.db import models


class User(models.Model):
    """
    用户表
    """
    userId = models.AutoField(primary_key=True)   # 用户主键自增长
    userGroup = models.ForeignKey(to='UserGroup', to_field='userGroupId', on_delete=models.CASCADE, default=1)  # 用户组id
    userRank = models.ForeignKey(to='UserMark', to_field='userMarkId', on_delete=models.CASCADE, default=1)   # 用户等级ID
    userName = models.CharField(max_length=32)    # 用户名
    pwd = models.CharField(max_length=32)         # 用户密码
    userLock = models.IntegerField(default=0)     # 是否锁定用户0不锁定1锁定
    userFreeze = models.IntegerField(default=0)   # 是否冻结用户0为不冻结1冻结


class UserInfo(models.Model):
    """
    用户信息表
    """
    user = models.ForeignKey(to='User', to_field='userId', on_delete=models.CASCADE)   # 用户id
    userInfoId = models.AutoField(primary_key=True)   # 自增id
    userPhone = models.BigIntegerField(null=True)   # 用户手机号
    userSex = models.CharField(max_length=6, null=True)        # 用户性别
    userQq = models.IntegerField(null=True)                  # 用户QQ
    userEmail = models.EmailField(null=True)                 # 用户邮箱
    userAddress = models.TextField(null=True)                # 用户地址
    userMark = models.IntegerField(default=0)                # 用户积分
    userRank = models.IntegerField(default=0)                # 用户等级
    userLastIp = models.GenericIPAddressField(null=True)     # 用户上次登录ip
    userBirthday = models.IntegerField(null=True)            # 用户生日
    userDescription = models.TextField(null=True)            # 用户自我描述
    userImageUrl = models.ImageField(null=True)              # 用户头像
    userSchool = models.TextField(null=True)                 # 用户毕业学校
    userRegisterTime = models.DateTimeField(auto_now_add=True, null=True)  # 用户注册时间
    userRegisterIp = models.GenericIPAddressField(null=True)    # 用户注册ip
    # userLastUpdateTime = models.DateTimeField(null=True)        # 用户上次更新时间
    userWeiBo = models.URLField(null=True)                            # 用户微博
    userBloodType = models.CharField(max_length=6, null=True)           # 用户血型
    userSay = models.TextField(null=True)                             # 用户语录


class UserMark(models.Model):
    """
    用户等级信息表
    """
    userMarkId = models.AutoField(primary_key=True)     # 用户积分自增id
    userMarkNumber = models.IntegerField(default=0)      # 用户积分数
    userMarkName = models.CharField(max_length=32)       # 用户积分名称


class UserGroup(models.Model):
    """
    用户组表
    """
    userGroupId = models.AutoField(primary_key=True)  # 用户组自增id
    userGroupName = models.CharField(max_length=32, null=True)   # 用户组名称
















































