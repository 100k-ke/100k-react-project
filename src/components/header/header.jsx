import React,{Component} from 'react' 
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import './header.less'
import Login from '../../pages/Login/Login'

@connect(
  state => ({
    username:state.userInfo.username   // 从状态中取出username，用的时候：this.props.username
  }),
  {

  }
)
@withRouter
class Header extends Component {
  state = {
    // 动态显示登录、注册
    isClose:true,
    isReg:false 
  }
  // 动态显示登录、注册的方法
  showLogin = (event)=>{
    console.log('aaa');
    if (event === true) {
      console.log('111');
      this.setState({isClose: event})
    }else{
      event.preventDefault()
      console.log('222');
      this.setState({isClose: false})
    }
  }
  showReg = (event)=>{
    if (event === false) {
      this.setState({isReg:false})
    }else{
      event.preventDefault()
      this.setState({isReg:true})
    }
  }
  componentDidMount(){
    console.log(this);
  }
  render (){
    const {isClose,isReg} = this.state
    return(
      <div className="topHeader" style={{display : this.props.location.pathname === '/home' ? 'none' :'block'}}>
        {
          isClose ? '' : <Login isShow={this.showLogin}/>
        }
        {
          isReg ? <Login isShowReg={this.showReg}/> : ''
        }
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
          <div className="headerContanierRight" style={{display:this.props.username === '/home' || '/profile' ? 'block':'none'}}>
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
            <span onClick={this.showLogin}>登录</span>
            <span onClick={this.showReg}> / 注册</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Header