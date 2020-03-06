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