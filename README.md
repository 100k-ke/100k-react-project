# 在jsx文件中，引入本地图片时，不能在src后直接写图片路径
解决1：用import引入，在src后写引入的变量
  import imgURL from './../images/photo.png';
  <img src={imgURL } />
解决2：<img src={require('./../images/photo.png')} />
  

# 发送请求会跨域，在package.json文件中添加配置代理
"proxy": "http://localhost:3000" 


# 要用@connect装饰器语法，需要下载什么，和配置