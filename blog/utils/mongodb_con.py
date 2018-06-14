import pymongo

connection = pymongo.MongoClient()  # 简历连接
tdb = connection.blog  # 创建数据库
history = tdb.history  # 创建表

jike = {'name': u'极客', 'age': '4', 'skill': 'Python'}
gog = {'name': u'天天', 'age': 123, 'skill': 'createanything', 'other': u'哈哈'}
godslaver = {'name': u'雨来', 'age': 'unknown', 'other': u'嘻嘻'}
post_info.insert(jike)
