import React,{Component} from 'react' 
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { deleteUserInfoAction } from "../../redux/actions/login_action";
import {Modal} from 'antd'
import './header.less'
import Login from '../../pages/Login/Login'

@connect(
  state => ({
    username:state.userInfo.username   // 从状态中取出username，用的时候：this.props.username
  }),
  {
    deleteUserInfo:deleteUserInfoAction
  }
)
@withRouter
class Header extends Component {
  state = {
    // 动态显示登录、注册
    isClose:true,
    isReg:false,
    visible: false   //是否展示提示框
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
  // 退出登录
  logout(){
    this.props.logout()
    this.setState({
      isClose:true
    })
  }
  //展示提示框
  showModal = () => {
    this.setState({
      visible: true,
    })
  }
  //点击确定
  handleOk = () => {
    this.setState({
      visible: false,
    })
    //删除用户名和token
    this.props.deleteUserInfo()
  }
  //点击取消
  handleCancel = () => {
    this.setState({
      visible: false,
    })
  }
  render (){
    const {isClose,isReg} = this.state
    const username = this.props.username
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
            <li onClick={()=>{this.props.history.push('/home')}}>首页</li>
            <li onClick={()=>{this.props.history.push('/ershoufang')}}>二手房</li>
            <li onClick={()=>{this.props.history.push('/newHouse')}}>新房</li>
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
              <span onClick={()=>{this.props.history.push('/profile')}}>{this.props.username.replace(/^(\d{3})\d*(\d{4})$/,'$1****$2')}</span>
              <span onClick={this.showModal} >{username ? '退出' : ''}</span>
              <Modal
                title="提示"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                okText='确定'
                cancelText='取消'
              >
                <p>您是否确定退出登录?</p>
              </Modal>
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