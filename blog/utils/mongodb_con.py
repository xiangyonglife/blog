from pymongo import MongoClient
from bson.json_util import dumps

client = MongoClient()  # 建立连接
db = client.blog  # 创建数据库
history = db.history  # 创建文章历史记录表
recycle = db.recycle  # 创建回收站表
article = db.article  # 创建文章详细表
