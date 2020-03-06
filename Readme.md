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

   ![](https://github.com/xufang775/web-cache/blob/master/images/md01.png?raw=true)

   

2. 在浏览器地址栏中输入：http://locahost:9000 即可。如下：

   ![](https://github.com/xufang775/web-cache/blob/master/images/md02.png?raw=true)

   

### 二、调试工具

我用的是 Chrome-Dev，我们这次的关注焦点是在http请求上，所以主要在 调试工具的 Network 。

打开调试界面：

1. F12，再进入 Network 界面
2. 在页面中右键，点击“检查”菜单，再进入 Network 界面。

![](https://github.com/xufang775/web-cache/blob/master/images/md03.png?raw=true)



### 三、看看Express服务默认的首页请求



#### 每一次请求：

1、它响应的状态码是：200，而且 size 的值是请求的实际的大小。所以它的结果是服务器给返回的，并没有走缓存。如下图：

![](https://github.com/xufang775/web-cache/blob/master/images/md04.png?raw=true)

2、我们再看看它的请求详情，如下图：

![](https://github.com/xufang775/web-cache/blob/master/images/md05.png?raw=true)

【说明】：

**1、在请求头中，有 Cache-Control: max-age = 0，看到这个可能会有一些人会有一些疑问。**

如：

1. 自己没有加这个请求头，为什么会有？难道是浏览器自动添加的？

   **答**：我有看到有一个提问说“老师说，浏览器会自动在请求头中添加上Cache-Control：max-age=0，但他本人不知道为什么”，然后我也测试了几个页面，也确实如此。<font color=red>如果有大神能帮我解惑就更好了</font>。

2. 浏览器为什么会加这个请求头？它会为哪些请求添加 Cache-Control：max-age=0，这样的请求头，还是所有的都加？

   **答：**因为我测试多个请求，发现也就网站首页才会自己添加上这个设置；像其他的html页面，以及html内的一些派生资源（图片，css，js等）就没有。所以我觉得吧，因为是浏览器认为网站的首页应该一直保持最新，所以就给它加了这个，这就设置了 首页只能走**协商缓存**

   

3. 这个缓存设置一般是在响应中设置，那在请求中设置又表示什么意思呢？

   答：我的理解啊：在响应中设置缓存信息，其实是为**下一次请求**时，设置相关缓存信息；而在请求中设置缓存信息，则是为**本次请求**设置缓存信息。

   ```mermaid
   graph LR
   A[服务端]--设置缓存-->B[响应中]
   B --服务于--> C[下一次请求]
   D[客户端]--设置缓存-->E[请求中]
   E --服务于--> F[本次请求]
   ```

   

2、在响应头中，为什么会有 Etag 信息？在程序中也没有设置。

答：ETag是协调缓存的配置项。因为协商缓存和强制缓存有一个区别，就是强制缓存不发请求到服务器，所有有时候资源更新了浏览器也不知道；而协商缓存会发请求到服务器，所以资源是否更新，浏览器是能够知道的。所以大部分Web服务器都默认开启协调缓存。而 Express 也默认开启了，所以才会有 Etag值。



第二次请求（刷新操作）：

结果如下：

![](https://github.com/xufang775/web-cache/blob/master/images/md06.png?raw=true)



![](https://github.com/xufang775/web-cache/blob/master/images/md07.png?raw=true)

此次请求时，因为已经有了Etag值，所以，请求头中就






















































