import React,{Component} from 'react' 
import {withRouter} from 'react-router-dom'

import './header.less'

// @withRouter
class Header extends Component {
  render (){
    return(
      <div className="header">
        <div className="headerContanier">
          <ul className="headerLeft">
            <li>首页</li>
            <li>二手房</li>
            <li>新房</li>
            <li>租房</li>
            <li>海外</li>
            <li>装修</li>
            <li>小区</li>
            <li>商业办公</li>
            <li>百科</li>
            <li>贝壳指数</li>
            <li>发布房源</li>
            <li>贝壳研究院</li>
            <li>下载App</li>
          </ul>
          <div className="headerRight">
            <div className="login">
              <i></i>
              <span>181****8263</span>
              <span>退出</span>
            </div>
            <div className="hotPhone">
              <i></i>
              <span className="phone">热线电话</span>
              <span>010-8888886</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header