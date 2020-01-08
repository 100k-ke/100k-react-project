# 在jsx文件中，引入本地图片时，不能在src后直接写图片路径
解决1：用import引入，在src后写引入的变量
  import imgURL from './../images/photo.png';
  <img src={imgURL } />
解决2：<img src={require('./../images/photo.png')} />
  

# 发送请求会跨域，在package.json文件中添加配置代理
"proxy": "http://localhost:3000" 


# 要用@connect装饰器语法，需要下载什么，和配置
  下载：@babel/plugin-proposal-decorators
  配置：在config-overrides.js中直接调用addDecoratorsLegacy()


# 正则匹配将手机号变成前三后四
    var str1 = '13991367972'
    var reg = /^(\d{3})\d*(\d{4})$/;
    var str2 = str1.replace(reg,'$1****$2')

    $1代表第一个小括号(\d{3}) 的内容

    $2带边第二个小括号(\d{4})的内容
