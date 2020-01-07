import React,{Component} from 'react'
import {connect} from 'react-redux'
import {saveUserInfoAction} from '../../redux/actions/login_action'
import './css/Login.less'
import {reqUsernameLogin,reqCodeLogin,reqPhoneLogin,reqAutoLogin} from '../../api'

@connect(
  state => ({}),
  {
    saveUserInfo:saveUserInfoAction
  }
)
class Login extends Component{
  // login中的state
  state = {
    isPwdLogin:false,
    type:'password',
    check:true,
    isClose:false,
    time:0,
    smsCode:0,
    msg:''
  }
  // 组件挂载执行以下代码
  componentDidMount(){
    if (this.props.location.pathname === '/newhome') {
      this.setState({path:true})
    }
    this.setState({isClose:false})
    let token = localStorage.getItem('token')
    this.autoLogin(token)
  }
  // 自动登录
  async autoLogin(token){
    console.log('123123');
    let result = await reqAutoLogin(token)
    console.log(result);
  }
  // 改变登录的方式
  setIsPwd = ()=>{
    let {isPwdLogin} = this.state
    this.setState({
      isPwdLogin:!isPwdLogin,
      msg:'',
      code:0,
      time:0
    })
    this.username.value = ''
    this.password.value = ''
  }
  // 改变input的type类型
  setType = ()=>{
    let {type} = this.state
    if (type === 'text') {
      this.setState({type:'password'})
    }else{
      this.setState({type:'text'})
    }
  }
  // 关闭login组件的方法
  close = ()=>{
    this.setState({isClose:true})
  }
  // 设置七天免登陆的状态
  setCheck = ()=>{
    let {check} = this.state
    this.setState({check:!check})
  }
  goto = ()=>{
    this.setState({isClose:true})
  }
  // 点击获取验证码
  getCode = async (e)=>{
    if (this.state.time > 0) return
    e.preventDefault()
    let phoneReg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
    if (phoneReg.test(this.username.value)) {
      this.setState({time:60})
      let timeId = setInterval(() => {
        let {time} = this.state
        this.setState({time:--time})
        if (time<=0) {
          clearInterval(timeId)
        }
      }, 1000)
      let phone = this.username.value
      let result = await reqCodeLogin(phone)
      console.log(result);
      const {code,msg} = result
      this.setState({smsCode:code,msg})
    }else{
      this.setState({msg:'请输入有效的手机号'})
    }
  }
  // 登录逻辑
  handleSubmit = async (e)=>{
    e.preventDefault()
    // 短信登录
    if (!this.state.isPwdLogin) {
      let phoneReg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
      if (phoneReg.test(this.username.value)) {
        let {smsCode} = this.state
        if (smsCode === 1) {
          let phone = this.username.value
          let sms = this.password.value
          let result = await reqPhoneLogin({phone,code:sms})
          const {code,data,msg} = result
          if (code === 1) {
            this.props.saveUserInfo(data)
            this.goto()
          } else {
            this.setState({msg})
          }
        }
      }else{
        this.setState({msg:'请输入有效的手机号'})
      }
    }else{ //密码登录
      if (!this.username.value || !this.password.value) {
        this.setState({msg:'用户名或密码错误'})
      }else{
        let username = this.username.value
        let pwd = this.password.value
        let result = await reqUsernameLogin(username,pwd)
        console.log(result);
        const {status,data,errMsg} = result
        if (status === 1) {
          this.props.saveUserInfo(data.users)
          this.goto()
        } else {
          this.setState({msg:errMsg})
        }
      }
    }
  }
  render(){
    let {isPwdLogin,type,check,path,isClose,time,msg} = this.state
    return (
      <div className={isClose ? 'BCTloginContainer BCTactive' : 'BCTloginContainer'}>
        <div className="BCTlogin">
          <div className="BCTclose BCTon" onClick={this.close}>×</div>
          <header>
            <p className="BCTtitle">{isPwdLogin ? '账号密码登录' : '手机快捷登录'}</p>
            {isPwdLogin ? '' : <p className="BCTnoWarry">别担心，无账号自动注册不会导致手机号被泄露</p>}
          </header>
          <section>
            <form>
              <div className="BCTphone">
                <input ref={(input)=>this.username = input} type="text" maxLength="11" placeholder={isPwdLogin ? '请输入用户名' : '请输入手机号'}/>
              </div>
              {path && !isPwdLogin ? 
                (<div className="BCTpicCode" >
                  <input ref={(input)=>this.code = input} type="text" placeholder="请输入验证码"/>
                  <img ref="img" className="BCTpic" src="http://localhost:3000/captcha" alt="captcha"/>
                </div>) : ''}
              <div className="BCTsmsCode">
                <input
                  ref={(input)=>this.password = input} 
                  type={isPwdLogin && type === 'password' ? 'password' : 'text'} 
                  placeholder={isPwdLogin ? '请输入密码' : '请输入短信验证码'}
                />
                {isPwdLogin ? <div onClick={this.setType} className="BCTeye BCTon"></div> : <p className="BCTbtnCode BCTon BCTline" onClick={this.getCode} >{time !== 0 ? `${time}s后重新发送` : '获取验证码'}</p>}
              </div>
              {msg ? <div className="BCTmsg">{msg}</div> : ''}
              <div className="BCTcheck">
                <div className="BCTnoLogin" onClick={this.setCheck}>
                  <input className="BCTbox BCTactive" type="checkbox" onChange={this.setCheck} checked={check}/>
                  <span className="BCTon">7天内免登陆</span>
                </div>
                {isPwdLogin ? <div className="BCTforgetPwd BCTon BCTline">忘记密码</div> : ''}
              </div>
              <button className="BCTbtnLogin BCTon" onClick={this.handleSubmit}>登录</button>
              <p className="BCTswitchover BCTon BCTline" onClick={this.setIsPwd}>{isPwdLogin ? '手机快捷登录' : '账号密码登录'}</p>
              {path ? 
                '' : (<div className="BCTfooter">
                  <span>登录即代表同意</span>
                  <a className="BCTon BCTline" href="https://www.ke.com/zhuanti/protocol">《贝壳隐私政策》</a>及
                  <a className="BCTon BCTline" href="https://www.ke.com/zhuanti/serviceProtocol">《贝壳用户服务协议》</a>
                </div>)
              }
            </form>
          </section>
        </div>
      </div>
    )
  }
}

export default Login