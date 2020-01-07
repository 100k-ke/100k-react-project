import React,{Component} from 'react'
import Header from '../../components/C-ershoufang/header/header'
import Nav from '../../components/C-ershoufang/nav/nav'
import HotHouse from '../../components/C-ershoufang/HotHouse/HotHouse'
import './css/ershoufang.css'



export default class ershoufang extends Component{
  render(){
    return(
      <div className="ershoufangComponent">
        <Header/>
        <Nav/>
        <HotHouse/>
      </div>
    )
  }
}