import React,{Component} from 'react' 
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import './header.less'

@connect(
  state => ({
    username:state.userInfo.username   // 从状态中取出username，用的时候：this.props.username
  }),
  {

  }
)
@withRouter
class Header extends Component {
  componentDidMount(){
    console.log(this);
  }
  render (){
    return(
      <div className="topHeader" style={{display : this.props.location.pathname === '/home' ? 'none' :'block'}}>
        <div className="headerContanier">
          <ul className="headerContanierLeft">
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
          <div className="headerContanierRight" style={{display:this.props.username?'block':'none'}}>
            <div className="login">
              <i></i>
              <span>{this.props.username.replace(/^(\d{3})\d*(\d{4})$/,'$1****$2')}</span>
              <span>退出</span>
            </div>
            <div className="hotPhone">
              <i></i>
              <span className="phone">热线电话</span>
              <span>010-8888886</span>
            </div>
          </div>
          <div className="headerContanierRight1" style={{display:this.props.username?'none':'block'}}>
            <span >登录</span>
            <span> / 注册</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Header