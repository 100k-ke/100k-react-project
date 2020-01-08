import React,{Component} from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Profile from './pages/Profile/Profile'
import Ershoufang from './pages/ershoufang/ershoufang'
import Home from './pages/home/home'
import Detail from './pages/detail/detail'
import Login from './pages/Login/Login'
import Header from './components/header/header'
import NewHouse from './pages/Newhouse/Newhouse'


class App extends Component{
  
  render(){
    return (
      <div className="app">
        <Header></Header>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/login" component={Login}/>
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
export default App
