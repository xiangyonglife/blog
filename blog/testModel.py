from django.db import models
class UserAttention(models.Model):
    """
    用户关注表
    """
    userAttentionId = models.AutoField(primary_key=True)    # 自增id
    attentionUser = models.ForeignKey(to='User', to_field='userId')  # 关注ID
    userId = models.IntegerField(null=True)     # 用户id


class Message(models.Model):
    """
    用户私信表
    """
    secretID = models.AutoField(primary_key=True)    # 自增id
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
    user = models.ForeignKey(to='User', to_field='userId')  # 该分类所属用户
    articleCategoryName = models.CharField(max_length=60)  # 分类名称


class Article(models.Model):
    """
    文章信息
    """
    articleCategory = models.ForeignKey(to='ArticleCategory', to_field='articleCategoryId')  #  类目id
    articleId = models.AutoField(primary_key=True)  # 自增id
    articleName = models.CharField(max_length=128)   # 文章标题
    articleTime = models.DateTimeField(auto_now=True)  # 发布时间
    articleIp = models.GenericIPAddressField(null=True)  # 发布ip
    articleClick = models.IntegerField(default=0)  # 查看人数
    articleContent = models.TextField()  # 文章内容
    articlePower = models.IntegerField(default=1)  # 文章可见0私有1公开2好友可见
    articleTop = models.IntegerField(default=1)  # 是否置顶0为否1为是
    articleSuperTop = models.IntegerField(default=0)  # 0否1是
    articleComment = models.IntegerField(default=0)  # 评论人数
    articleLike = models.IntegerField(default=0)  # 喜欢人数


class comment(models.Model):
    """
    用户评论
    """
    commentId = models.AutoField(primary_key=True)  # 自增id
    commentContent = models.TextField()  # 评论内容
    commentUser = models.ForeignKey(to='User', to_field='userId')  # 评论者
    commentTime = models.DateTimeField(auto_now_add='True')  # 评论时间
    commentIp = models.GenericIPAddressField()  # 评论id