import React,{Component} from 'react'
import './css/proflie.css'

export default class Profile extends Component{
  render(){
    return (
      <div className="profileContainer">
        {/* 头部 */}
        <div className="headerContainer">
          <div className="profile-header">
            {/* logo */}
            <div className="header-logo">
              <img src="./images/logo.png" alt=""/>
            </div>
            {/* 头部导航 */}
            <div className="header-nav"></div>
          </div>
        </div>
        {/* 主体 */}
        <div className="detailContainer">
          <div className="profile-detail"></div>
        </div>
        {/* 尾部 */}
        <div className="footerContainer">
          <div className="profile-footer"></div>
        </div>
      </div>
    )
  }
}