import React,{Component} from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Profile from './pages/Profile/Profile'
import Ershoufang from './pages/ershoufang/ershoufang'
import Home from './pages/home/home'
import Detail from './pages/detail/detail'
import Header from './components/header/header'
import NewHouse from './pages/Newhouse/Newhouse'
import {reqAutoLogin} from './api'
import {saveUserInfoAction} from './redux/actions/login_action'


export default class App extends Component{
  componentDidMount(){
    // saveUserInfoAction()
    // let username = JSON.parse(localStorage.getItem('user') || sessionStorage.getItem('user'))
    // this.autoLogin(username)
  }
  // autoLogin = async (username)=>{
  //   let result = await reqAutoLogin(username)
  //   console.log(result);
  //   const {code,data} = result
  //   if (code === 1) {
  //     saveUserInfoAction({data,check:1})
  //   }else{
  //     return
  //   }
  // }
  render(){
    return (
      <div className="app">
        <Header></Header>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/detail/:id" component={Detail}/>
          <Route path="/ershoufang" component={Ershoufang}/>
          <Route path="/detail" component={Detail}/>
          <Route path="/profile/:index" component={Profile}/>
          <Route path="/newhouse" component={NewHouse}/>
          <Redirect to="/home"/>
        </Switch>
      </div>
    )
  }
}

