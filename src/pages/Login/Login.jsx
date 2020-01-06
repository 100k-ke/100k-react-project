import React,{Component} from 'react'
import './css/Login.less'

export default class MyComponent extends Component{
  state = {
    isPwdLogin:true,
    type:'password',
    check:true,
    path:false,
    isClose:false
  }
  componentDidMount(){
    console.log(this);
    console.log(this.props.location.pathname);
    // let {path} = this.state
    if (this.props.location.pathname === '/newhome') {
      this.setState({path:true})
    }
  }
  setIsPwd = ()=>{
    let {isPwdLogin} = this.state
    this.setState({isPwdLogin:!isPwdLogin})
  }
  setType = ()=>{
    console.log('aaa')
    let {type} = this.state
    if (type === 'text') {
      this.setState({type:'password'})
    }else{
      this.setState({type:'text'})
    }
  }
  close = ()=>{
    // let {isClose} = this.state
    this.setState({isClose:true})
  }
  setCheck = ()=>{
    let {check} = this.state
    this.setState({check:!check})
  }
  goto = ()=>{
    // let {isClose} = this.state
    this.setState({isClose:false})
  }
  render(){
    let {isPwdLogin,type,check,path,isClose} = this.state
    return isClose ? '' : (
      <div className={isClose ? 'loginContainer active' : 'loginContainer'}>
        <div className="login">
          <div className="close on" onClick={this.close}>×</div>
          <header>
            <p className="title">手机快捷登录</p>
            {isPwdLogin ? '' : <p className="noWarry">别担心，无账号自动注册不会导致手机号被泄露</p>}
          </header>
          <section>
            <form>
              <div className="phone">
                <input type="text" maxLength="11" placeholder="请输入手机号"/>
              </div>
              {path && !isPwdLogin ? 
                (<div className="picCode" >
                  <input type="text" placeholder="请输入验证码"/>
                  <img className="pic" src="https://upassport.ke.com/freshCaptch?t=1578234694799" alt=""/>
                </div>) : ''}
              <div className="smsCode">
                <input type={isPwdLogin && type === 'password' ? 'password' : 'text'} placeholder={isPwdLogin ? '请输入密码' : '请输入短信验证码'}/>
                {isPwdLogin ? <div onClick={this.setType} className="eye on"></div> : <p className="btnCode on line">获取验证码</p>}
              </div>
              <div className="check">
                <div className="noLogin" onClick={this.setCheck}>
                  <input className="box active" type="checkbox" onChange={this.setCheck} checked={check}/>
                  <span className="on">7天内免登陆</span>
                </div>
                {isPwdLogin ? <div className="forgetPwd on line">忘记密码</div> : ''}
              </div>
              <button className="btnLogin on">登录</button>
              <p className="switchover on line" onClick={this.setIsPwd}>{isPwdLogin ? '手机快捷登录' : '账号密码登录'}</p>
              {path ? 
                '' : (<div className="footer">
                  <span>登录即代表同意</span>
                  <a href="https://www.ke.com/zhuanti/protocol">《贝壳隐私政策》</a>及
                  <a href="https://www.ke.com/zhuanti/serviceProtocol">《贝壳用户服务协议》</a>
                </div>)
              }
            </form>
          </section>
        </div>
      </div>
    )
  }
}