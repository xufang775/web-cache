/**
 * express服务器
 */
var exress = require('express')
var app = exress()

// 设置静态文件托管目录
app.use(exress.static('./static'))

app.get('/',function(req,res){
  res.send('你好，我是express')
})

app.listen(9000,function(){
  console.log('start localhost:9000 success')
})