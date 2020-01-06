import React,{Component} from 'react'
import './css/profile.less'

export default class Profile extends Component{
  state = {
    roomCount:''    //关注房子的数量
  }
  componentDidMount(){
    let ul = this.refs.roomlist
    let lis = ul.children
    this.setState({
      roomCount:lis.length
    })
  }
  render(){
    const headerArrs = ['二手房','新房','租房','海外','装修','商业办公','小区','百科','贝壳指数','发布房源','贝壳研究院']
    const {roomCount} = this.state
    return (
      <div className="profileContainer">
        {/* 头部 */}
        <div className="headerContainer">
          <div className="profile-header w">
            {/* logo */}
            <div className="header-logo"></div>
            {/* 头部导航 */}
            <ul className="header-nav">
              {
                headerArrs.map((header,index)=>{
                  return (
                    <li key={index}>
                      <span>{header}</span>
                    </li>
                  )
                })
              }
              <li className="downApp">
                <span>下载app</span>
                {/* 下载APP */}
                {/* <div className="download" style={{display:'none'}}> */}
                <div className="download">
                  <i></i>
                  <div className="downImg"></div>
                </div>
              </li>
            </ul>
            <div className="logout" >
              <span>17**...</span>
              <span className="logout-a">退出</span>
            </div>
            
          </div>
        </div>
        {/* 主体 */}
        <div className="detailContainer w">
          {/* 左侧 */}
          <div className="main-left">
            {/* 用户头像 */}
            <div className="user-avatar"></div>
            {/* 用户名 */}
            <div className="user-name">
              <span>欢迎你,17****85</span>
            </div>
            <ul className="user-detail">
              <li className="active">关注的房源</li>
              <li>关注的小区</li>
              <li>我的搜索</li>
              <li>编辑资料</li>
            </ul>
          </div>
          {/* 右侧 */}
          <div className="main-right">
            {/* 标题 */}
            <div className="title">
              共 &nbsp;
              <span className="room-count">{roomCount}</span>&nbsp;
              套 关注房源
            </div>
            {/* 关注的房子类型 */}
            <div className="room-list">
              <span className="room-span active">二手房</span>
              <span className="room-span">新房</span>
              <span className="room-span">租房</span>
            </div>
            {/* 未关注房子的状态 */}
            <div className="room-detail" style={{display:'none'}}>
              <div className="room-logo"></div>
              <p className="room-text">还没有关注任何房源哦</p>
            </div>
            {/* 关注房子的状态信息 */}
            <ul className="roomList" ref="roomlist">
              <li>
                <div className="roomDetail">
                  {/* 房子图片 */}
                  <div className="roomImg"></div>
                  {/* 房子的详情 */}
                  <div className="roomInfo">
                    <div className="roomTitle">
                      <p>【首套首付215万】【套内面积86.49】</p>
                    </div>
                    <div className="roomXqing">
                      <div className="roomMap">
                        <span>益辰欣园</span>
                        <span>2室1厅</span>
                        <span className="line">|</span>
                        <span>99.02平米</span>
                        <span className="line">|</span>
                        <span>东 西</span>
                      </div>
                      <div className="roomType">
                        <span>二手房</span>
                        <span className="xie">/</span>
                        <span>低楼层(共11层)</span>
                        <span className="xie">/</span>
                        <span>2002年建板塔结合</span>
                      </div>
                    </div>
                    <div className="roomPrice">
                      <div className="price">
                        <span className="cum">468</span>
                        万
                      </div>
                      <div className="price-pre">48273.1 元/m²</div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="roomDetail">
                  {/* 房子图片 */}
                  <div className="roomImg"></div>
                  {/* 房子的详情 */}
                  <div className="roomInfo">
                    <div className="roomTitle">
                      <p>【首套首付215万】【套内面积86.49】</p>
                    </div>
                    <div className="roomXqing">
                      <div className="roomMap">
                        <span>益辰欣园</span>
                        <span>2室1厅</span>
                        <span className="line">|</span>
                        <span>99.02平米</span>
                        <span className="line">|</span>
                        <span>东 西</span>
                      </div>
                      <div className="roomType">
                        <span>二手房</span>
                        <span className="xie">/</span>
                        <span>低楼层(共11层)</span>
                        <span className="xie">/</span>
                        <span>2002年建板塔结合</span>
                      </div>
                    </div>
                    <div className="roomPrice">
                      <div className="price">
                        <span className="cum">468</span>
                        万
                      </div>
                      <div className="price-pre">48273.1 元/m²</div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            {/* 取消关注 */}
            <div className="delete-room underline"  style={{display:'none'}}>
              取消关注
            </div>
          </div>
        </div>
        {/* 底部 */}
        <div className="footerContainer w">
          天津小屋信息科技有限公司 | 地址：天津经济技术开发区南港工业区综合服务区办公楼C座一层112室09单元 | 电话：10106188 <br/><br/>
          津ICP备18000836号-1 | © Copyright©2020 ke.com版权所有|
          &nbsp; 
          <span className="ipc">ICP证</span>
        </div>
      </div>
    )
  }
}