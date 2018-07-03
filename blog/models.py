"""
:author 向勇
数据库模型
"""
from django.db import models


class User(models.Model):
    """
    用户表
    """
    userId = models.AutoField(primary_key=True)  # 用户主键自增长
    userGroup = models.ForeignKey(to='UserGroup', to_field='userGroupId', on_delete=models.CASCADE, default=1)  # 用户组id
    userRank = models.ForeignKey(to='UserMark', to_field='userMarkId', on_delete=models.CASCADE, default=1)  # 用户等级ID
    userName = models.CharField(max_length=32)  # 用户名
    pwd = models.CharField(max_length=32)  # 用户密码
    userLock = models.IntegerField(default=0)  # 是否锁定用户0不锁定1锁定
    userFreeze = models.IntegerField(default=0)  # 是否冻结用户0为不冻结1冻结


class UserInfo(models.Model):
    """
    用户信息表
    """
    user = models.ForeignKey(to='User', to_field='userId', on_delete=models.CASCADE)  # 用户id
    userInfoId = models.AutoField(primary_key=True)  # 自增id
    userPhone = models.BigIntegerField(null=True)  # 用户手机号
    userSex = models.CharField(max_length=6, null=True)  # 用户性别
    userQq = models.IntegerField(null=True)  # 用户QQ
    userEmail = models.EmailField(null=True)  # 用户邮箱
    userAddress = models.TextField(null=True)  # 用户地址
    userMark = models.IntegerField(default=0)  # 用户积分
    userRank = models.IntegerField(default=0)  # 用户等级
    userLastIp = models.GenericIPAddressField(null=True)  # 用户上次登录ip
    userBirthday = models.IntegerField(null=True)  # 用户生日
    userDescription = models.TextField(null=True)  # 用户自我描述
    userImageUrl = models.ImageField(null=True)  # 用户头像
    userSchool = models.TextField(null=True)  # 用户毕业学校
    userRegisterTime = models.DateTimeField(auto_now_add=True, null=True)  # 用户注册时间
    userRegisterIp = models.GenericIPAddressField(null=True)  # 用户注册ip
    # userLastUpdateTime = models.DateTimeField(null=True)        # 用户上次更新时间
    userWeiBo = models.URLField(null=True)  # 用户微博
    userBloodType = models.CharField(max_length=6, null=True)  # 用户血型
    userSay = models.TextField(null=True)  # 用户语录


class UserMark(models.Model):
    """
    用户等级信息表
    """
    userMarkId = models.AutoField(primary_key=True)  # 用户积分自增id
    userMarkNumber = models.IntegerField(default=0)  # 用户积分数
    userMarkName = models.CharField(max_length=32)  # 用户积分名称


class UserGroup(models.Model):
    """
    用户组表
    """
    userGroupId = models.AutoField(primary_key=True)  # 用户组自增id
    userGroupName = models.CharField(max_length=32, null=True)  # 用户组名称


class UserAttention(models.Model):
    """
    用户关注表
    """
    userAttentionId = models.AutoField(primary_key=True)  # 自增id
    attentionUser = models.ForeignKey(to='User', to_field='userId', on_delete=models.CASCADE)  # 关注ID
    userId = models.IntegerField(null=True)  # 用户id


class Message(models.Model):
    """
    用户私信表
    """
    secretID = models.AutoField(primary_key=True)  # 自增id
    sendId = models.IntegerField(null=True)  # 发信者id
    receiveId = models.IntegerField(null=True)  # 接收者id
    messageTitle = models.CharField(max_length=64, null=True)  # 信息标题
    messageContent = models.TextField(null=True)  # 私信内容


class SystemMessage(models.Model):
    """
    系统通知
    """
    systemMsgId = models.AutoField(primary_key=True)  # 系统通知


class ArticleCategory(models.Model):
    """
    文章类目
    """
    articleCategoryId = models.AutoField(primary_key=True)  # 自增id
    user = models.ForeignKey(to='User', to_field='userId', on_delete=models.CASCADE)  # 该分类所属用户
    articleCategoryName = models.TextField(null=True)  # 分类名称
    articleTemplate = models.TextField(null=True)  # 类目模板
    articleUuid = models.CharField(max_length=100, null=True)  # 文集唯一标识
    status = models.IntegerField(default=0)  # 0正常，1删除，2其他

    class Meta:  # 注意，是模型的子类，要缩进！  根据这些进行进一步删选
        ordering = ["-articleCategoryId"]


class ArticleBlogCategory(models.Model):
    """
        文章一级栏目，首页按钮定制
    """
    articleBlogCategoryId = models.AutoField(primary_key=True)  # 自增id
    articleBlogCategoryName = models.CharField(max_length=60, null=True)  # 栏目名称


class ArticleBlogCategoryTwo(models.Model):
    """
    文章二级类目
    """
    articleBlogCategoryTwoId = models.AutoField(primary_key=True)  # 自增id
    articleBlogCategoryTwoName = models.CharField(max_length=60, null=True)  # 二级类目名称
    ArticleBlogCategory = models.ForeignKey(to='ArticleBlogCategory', to_field='articleBlogCategoryId',
                                            on_delete=models.CASCADE, null=True)  # 文章栏目


class ArticleTag(models.Model):
    """
    文章标签表
    """
    articleTagId = models.AutoField(primary_key=True)  # tag id
    articleId = models.TextField(null=True)  # 对应文章
    articleTagName = models.TextField(null=True)


class Article(models.Model):
    """
    文章信息
    """
    articleCategory = models.ForeignKey(to='ArticleCategory', to_field='articleCategoryId',
                                        on_delete=models.CASCADE, null=True)  # 文章所属用户类目
    user = models.ForeignKey(to='User', to_field='userId', on_delete=models.CASCADE, null=True)  # 文章所属用户
    ArticleBlogCategory = models.ForeignKey(to='ArticleBlogCategory', to_field='articleBlogCategoryId',
                                            on_delete=models.CASCADE, null=True)  # 文章所属一级栏目
    ArticleBlogCategoryTwo = models.ForeignKey(to='ArticleBlogCategoryTwo', to_field='articleBlogCategoryTwoId',
                                               on_delete=models.CASCADE, null=True)  # 文章所属二级栏目
    articleId = models.AutoField(primary_key=True)  # 自增id
    articleName = models.CharField(max_length=128, null=True)  # 文章标题
    articleTime = models.DateTimeField(auto_now=True)  # 发布时间
    articleIp = models.GenericIPAddressField(null=True)  # 发布ip
    articleClick = models.IntegerField(default=0)  # 查看人数
    articleContent = models.TextField()  # 文章内容
    articlePower = models.IntegerField(default=1)  # 文章可见0私有1公开2好友可见
    articleTop = models.IntegerField(default=0)  # 是否置顶0为否1为是
    articleSuperTop = models.IntegerField(default=0)  # 博主推荐0否1是
    articleComment = models.IntegerField(default=0)  # 评论人数
    articleLike = models.IntegerField(default=0)  # 喜欢人数
    articleUrl = models.URLField(null=True, unique=True)  # 文章路径


class Comment(models.Model):
    """
    用户评论
    """
    commentId = models.AutoField(primary_key=True)  # 自增id
    commentContent = models.TextField()  # 评论内容
    commentUser = models.ForeignKey(to='User', to_field='userId', on_delete=models.CASCADE)  # 评论者
    commentTime = models.DateTimeField(auto_now_add='True')  # 评论时间
    commentIp = models.GenericIPAddressField()  # 评论ip
    commentArticle = models.ForeignKey(to='Article', to_field='articleUrl', on_delete=models.CASCADE,
                                       null=True)  # 评论文章id
    fatherComment = models.ForeignKey('self', on_delete=models.CASCADE, null=True)

    class Meta:  # 注意，是模型的子类，要缩进！  根据这些进行进一步删选
        ordering = ["-commentId"]
