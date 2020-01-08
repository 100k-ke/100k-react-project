import React,{Component} from 'react'
import './css/newhouse.css'
import { Input } from 'antd';
import HotHouse from '../../components/NewHouse/HotHouse/HotHouse'
import MainNav from '../../components/NewHouse/MainNav/MainNav'

export default class Profile extends Component{
  
  render(){
    return (
      <div className="newhouseContainer">
        <div className="headerContainer">
          <div className="header">
            <ul>
              <li>首页</li>
              <li>二手房</li>
              <li>新房</li>
              <li>租房</li>
              <li>海外</li>
              <li>装修</li>
              <li>小区</li>
              <li>百科</li>
            </ul>
            <div>登录/注册</div>
          </div>
        </div>
        <div className="mainnavContainer">
          <div className="mainnav">
            <div className="navTop">
              <div className="left">
                <img src="//s1.ljcdn.com/kepler/static/dist/common/img/logo@2x.png?_v=20200103150159" alt=""/>
                <span></span>
                <div>北京 i</div>
              </div>
              <div className="search">
                <Input type="text" placeholder="请试试输入楼盘名、区域或地铁线"/>
                <div className="searchIconContainer">
                  <i>icon</i>
                </div>
              </div>
              <ul className="place">
                <li>中海首钢长安云锦</li>
                <li>中海寰宇时代</li>
                <li>葛洲坝北京紫郡兰园</li>
              </ul>
            </div>
            <div className="navBottom">
              <ul className="bottomLeft">
                <li className="active">全部楼盘</li>
                <li>近期开盘</li>
                <li>优惠楼盘</li>
                <li>地图找房</li>
                <li>帮我找房</li>
              </ul>
              <div className="bottomRight">咨询热线：4000608902转8630
              </div>
            </div>
          </div>
        </div>
        {/* <!-- 筛选过滤 --> */}
        <MainNav/>
        {/* 楼盘列表 */}
        <HotHouse/>
      </div>
    )
  }
}