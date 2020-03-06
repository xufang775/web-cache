/**
 * 请求方法（XmlHttpReaquest）
 * @param {
 * method:请求方法,
 * url:请求路径
 * data:请求数据
 * cb:回调函数
 * header:请求头
 * } param0 
 */
function request({method='GET',url,data,cb,header = []}){
  var httpRequest = new XMLHttpRequest();
  httpRequest.open(method,url,true);
  if(header && typeof header === 'array'){
    header.forEach(item=>{
      httpRequest.setRequestHeader(item.key,item.value)
    })
  }
  if(data){
    httpRequest.send(data)
  } else {
    httpRequest.send();
  }
  cb && (httpRequest.onreadystatechange = cb);
}
/**
 * 请求用户列表方法
 */
function getList(){
  request({
    method:'GET',
    url:'/user/list',
    cb:function(){
      if(this.readyState==4 && this.status == 200 ){
        console.log(this.responseText);
      }
    }
  })
}

(function(){
  // document.body.style.backgroundColor='yellow';
  console.log("==== 我是用来测试js的 ====")

  // getList();

  // setTimeout(function(){
  //   getList();
  // },5000)

}())