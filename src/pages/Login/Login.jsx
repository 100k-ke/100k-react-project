import React,{Component} from 'react'
import './css/Login.less'

export default class MyComponent extends Component{
  state = {
    isPwdLogin:false,
    type:'password',
    check:true,
    path:false,
    isClose:false,
    time:0,
    code:'',
    msg:''
  }
  componentDidMount(){
    console.log(this.refs.img);
    // let {path} = this.state
    if (this.props.location.pathname === '/newhome') {
      this.setState({path:true})
    }
  }
  setIsPwd = ()=>{
    let {isPwdLogin} = this.state
    this.setState({
      isPwdLogin:!isPwdLogin,
      msg:''
    })
  }
  setType = ()=>{
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
  getCode = (e)=>{
    if (this.state.time > 0) return
    e.preventDefault()
    let phoneReg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
    if (phoneReg.test(this.phone.value)) {
      this.setState({time:60})
      let timeId = setInterval(() => {
        let {time} = this.state
        this.setState({time:--time})
        if (time<=0) {
          clearInterval(timeId)
        }
      }, 1000)
    }else{
      this.setState({msg:'请输入有效的手机号'})
    }
  }
  handleSubmit = (e)=>{
    e.preventDefault()
    let phoneReg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
    if (phoneReg.test(this.phone.value)) {
      alert('发请求了。。。')
    }else{
      this.setState({msg:'请输入有效的手机号'})
    }
  }
  render(){
    let {isPwdLogin,type,check,path,isClose,time,msg} = this.state
    return isClose ? '' : (
      <div className={isClose ? 'loginContainer active' : 'loginContainer'}>
        <div className="login">
          <div className="close on" onClick={this.close}>×</div>
          <header>
            <p className="title">{isPwdLogin ? '账号密码登录' : '手机快捷登录'}</p>
            {isPwdLogin ? '' : <p className="noWarry">别担心，无账号自动注册不会导致手机号被泄露</p>}
          </header>
          <section>
            <form>
              <div className="phone">
                <input ref={(input)=>this.phone = input} type="text" maxLength="11" placeholder="请输入手机号"/>
              </div>
              {path && !isPwdLogin ? 
                (<div className="picCode" >
                  <input ref={(input)=>this.code = input} type="text" placeholder="请输入验证码"/>
                  <img ref="img" className="pic" src="http://localhost:3000/captcha" alt="captcha"/>
                </div>) : ''}
              <div className="smsCode">
                <input 
                  ref={(input)=>this.password = input} 
                  type={isPwdLogin && type === 'password' ? 'password' : 'text'} 
                  placeholder={isPwdLogin ? '请输入密码' : '请输入短信验证码'}
                />
                {isPwdLogin ? <div onClick={this.setType} className="eye on"></div> : <p className="btnCode on line" onClick={this.getCode} >{time !== 0 ? `${time}s后重新发送` : '获取验证码'}</p>}
              </div>
              {msg ? <div className="msg">{msg}</div> : ''}
              <div className="check">
                <div className="noLogin" onClick={this.setCheck}>
                  <input className="box active" type="checkbox" onChange={this.setCheck} checked={check}/>
                  <span className="on">7天内免登陆</span>
                </div>
                {isPwdLogin ? <div className="forgetPwd on line">忘记密码</div> : ''}
              </div>
              <button className="btnLogin on" onClick={this.handleSubmit}>登录</button>
              <p className="switchover on line" onClick={this.setIsPwd}>{isPwdLogin ? '手机快捷登录' : '账号密码登录'}</p>
              {path ? 
                '' : (<div className="footer">
                  <span>登录即代表同意</span>
                  <a className="on line" href="https://www.ke.com/zhuanti/protocol">《贝壳隐私政策》</a>及
                  <a className="on line" href="https://www.ke.com/zhuanti/serviceProtocol">《贝壳用户服务协议》</a>
                </div>)
              }
            </form>
          </section>
        </div>
      </div>
    )
  }
}