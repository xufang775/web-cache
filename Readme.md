# 浏览器缓存-示例

此demo是用Express启动的一个服务器，应用来学习测试浏览器缓存使用的。



### 一、案例说明及启动

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

   ![](https://github.com/xufang775/web-cache/blob/master/images/md01.png)

   

2. 在浏览器地址栏中输入：http://locahost:9000 即可。如下：

   ![](https://github.com/xufang775/web-cache/blob/master/images/md02.png)

   

### 二、调试工具

我用的是 Chrome-Dev，我们这次的关注焦点是在http请求上，所以主要在 调试工具的 Network 。

打开调试界面：

1. F12，再进入 Network 界面
2. 在页面中右键，点击“检查”菜单，再进入 Network 界面。

![https://github.com/xufang775/web-cache/blob/master/images/md03.png]()



### 三、看看Express服务默认的首页请求

1、它响应的状态码是：200，而且 size 的值是请求的实际的大小。所以它的结果是服务器给返回的，并没有走缓存。如下图：

![https://github.com/xufang775/web-cache/blob/master/images/md04.png]()

2、我们再看看它的请求详情，如下图：

![https://github.com/xufang775/web-cache/blob/master/images/md05.png?raw=true]()


























































