# 浏览器缓存-示例-dev

此demo是用Express启动的一个服务器，应用来学习测试浏览器缓存使用的。

此分支下，我为Express添加了静态文件托管目录 ./static ，并在index.html页面中引入的 css , js 及 图片。

app.js 如下：

```javascript
/**
 * express服务器
 */
var exress = require('express')
var app = exress()

// 设置静态文件托管目录
app.use(exress.static('./static'))  //----------------- 此代码是新添加的

app.get('/',function(req,res){
  res.send('你好，我是express')
})

app.listen(9000,function(){
  console.log('start localhost:9000 success')
})
```

【说明】添加了静态文件托管，则网站的前端就是 static 目录下的 index.html 页面的。而非路由的响应结果了。
























































