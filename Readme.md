# 浏览器缓存-示例

此demo是用Express启动的一个服务器，应用来学习测试浏览器缓存使用的。

此demo此时是最简单的。其只有一个主文件 app.js

```javascript
/**
 * express服务器
 */
var exress = require('express')
var app = exress()
app.get('/',function(req,res){
  res.send('你好，我是express')
})
app.listen(9000,function(){
  console.log('start localhost:9000 success')
})
```

【启动】

1. 命令行跳转到项目目录下，执行 `nodemon app.js`；结果如下图，则表示启动成功了：

   ![](E:\00Demo\web-cache\images\md01.png)

   

2. 在浏览器地址栏中输入：http://locahost:9000 即可。如下：

   ![](E:\00Demo\web-cache\images\md02.png)

   




































































