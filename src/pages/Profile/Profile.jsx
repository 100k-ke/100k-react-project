import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './css/profile.less'
import RoomHeader from '../../components/RoomHeader/RoomHeader'
import RoomContent from '../../components/RoomContent/RoomContent'

export default class Profile extends Component{
  state = {
    roomCount:'',    //关注房子的数量
    active:[true,false,false],     //用高亮样式,默认不用
    leftActiveArrs:[   //左侧菜单
      {name:'关注的房源',active:true},
      {name:'关注的小区',active:false},
      {name:'我的搜索',active:false},
      {name:'编辑资料',active:false},
    ]
  }
  changeActive1 = (index)=>{
    let {active}  = this.state
    let newActive = active.map((item,i)=>{
      if (index === i) {
        item = true
      }else{
        item = false
      }
      return item
    })
    this.setState({
      active:newActive
    })
  }
  changeActive2 = (index) =>{
    let {leftActiveArrs}  = this.state
    let newActive = leftActiveArrs.map((item,i)=>{
      if (index === i) {
        item.active = true
      }else{
        item.active = false
      }
      return item
    })
    this.setState({
      leftActiveArrs:newActive
    })
  }
  // 挂载
  componentDidMount(){
    // 获取ul
    let ul = this.refs.roomlist
    // 获取li的列表
    let lis = ul.children
    // 更新房子的数量的状态
    this.setState({
      roomCount:lis.length
    })
  }
  render(){
    // 模拟数据
    const headerArrs = ['租房','海外','装修','商业办公','小区','百科','贝壳指数','发布房源','贝壳研究院']
    const {roomCount,active,leftActiveArrs}  = this.state
    return (
      <div className="profileContainer">
        {/* 头部 */}
        <div className="headerContainer">
          <div className="profile-header w">
            {/* logo */}
            <div className="header-logo"></div>
            {/* 头部导航 */}
            <ul className="header-nav">
              <li>
                <Link to="/ershoufang">二手房</Link>
              </li>
              <li>
                <Link to="/newhouse">新房</Link>
              </li>
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
              {
                leftActiveArrs.map((left,index)=>{
                  return (
                    <li key={index} onClick={()=>this.changeActive2(index)} className={leftActiveArrs[index].active ? 'active' : ''}>{left.name}</li>
                  )
                })
              }
            </ul>
          </div>
          {/* 右侧 */}
          <div className="main-right">

            {/* 标题 */}
            <RoomHeader roomCount={roomCount}/>

            {/* 关注的房子类型 */}
            <div className="room-list">
              <span className={active[0] ? 'room-span active' : 'room-span'}  onClick={()=>this.changeActive1(0)}>二手房</span>
              <span className={active[1] ? 'room-span active' : 'room-span'}  onClick={()=>this.changeActive1(1)}>新房</span>
              <span className={active[2] ? 'room-span active' : 'room-span'}  onClick={()=>this.changeActive1(2)}>租房</span>
            </div>

            {/* 未关注房子的状态 */}
            <RoomContent/>

            {/* 关注房子的状态信息 */}
            <ul className="roomList" ref="roomlist" style={{display:'none'}}>
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
            <div className="delete-room underline" style={{display:'none'}}>
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