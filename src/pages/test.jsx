import React,{Component} from 'react'
import Login from './Login/Login'

export default class MyComponent extends Component{
  state = {
    isClose:true,
    isReg:false
  }
  showLogin = (event)=>{
    if (event === true) {
      this.setState({isClose: event})
    }else{
      this.setState({isClose: false})
    }
  }
  showReg = (event)=>{
    if (event === false) {
      this.setState({isReg:false})
    }else{
      this.setState({isReg:true})
    }
    
  }
  render(){
    const {isClose,isReg} = this.state
    return(
      <div>
        <button onClick={this.showLogin}>login</button>
        <button onClick={this.showReg}>register</button>
        {
          isClose ? '' : <Login isShow={this.showLogin}/>
        }
        {
          isReg ? <Login isShowReg={this.showReg}/> : ''
        }
      </div>
    )
  }
}