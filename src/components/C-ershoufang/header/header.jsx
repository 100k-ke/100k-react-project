import React,{Component} from 'react'
import {Input} from 'antd'
import './css/header.css'
const {Search} = Input
export default class Header extends Component{
  render(){
    return(
      <div className="headerComponent">
        {/* 头部导航栏bar */}
        <div className="barComponent">
          <div className="headerBar">
            <ul className="barLeft">
              <li>首页</li>
              <li>二手房</li>
              <li>新房</li>
              <li>租房</li>
              <li>海外</li>
              <li>装修</li>
              <li>商业办公</li>
              <li>小区</li>
              <li>百科</li>
              <li>贝壳指数</li>
              <li>发布房源</li>
              <li>贝壳研究院</li>
              <li className="lastLi">
                下载App
                <div className="location"></div>
              </li>
            </ul>
            <ul className="barRight">
              <li>
                <span className="user"></span>
                <span>登录</span>/
                <span>注册</span>
              </li>
              <li>
                <span className="phone"></span>
                <span className="span">热线电话</span>
                <span>1010-6188</span>
              </li>
            </ul>
          </div>
        </div>
        {/* login图 */}
        <div className="headComponent">
          <div className="conter">
            <div className="headerLeft">
              <span></span>
              <ul >
                <li>
                  在售
                </li>
                <li>
                  成交
                </li>
                <li>
                  小区
                </li>
                <li>
                  地图找房
                </li>
              </ul>
            </div>
            <div className="headerRight"> 
              <span className="phone"></span>
              <span>下载贝壳找房App</span>
              <div className="show">
                <div className="img"></div>
                <p className="p1">贝壳找房APP</p>
                <p className="p2">找房大平台</p>
              </div>
            </div>  
          </div>
          <div className="conter">
            <Search className="input" placeholder="请输入区域或小区名开始找房" onSearch={value => console.log(value)}/>
          </div>
        </div>
      </div>
    )
  }
}