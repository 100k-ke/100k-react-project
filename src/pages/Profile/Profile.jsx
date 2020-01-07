import React,{Component} from 'react'
import {connect} from 'react-redux'
import { Modal } from 'antd'
import {Link} from 'react-router-dom'
import './css/profile.less'
import RoomHeader from '../../components/RoomHeader/RoomHeader'
import RoomContent from '../../components/RoomContent/RoomContent'
import datas from '../../datas/roomDetail.json'
import {deleteUserInfoAction} from '../../redux/actions/login_action'

@connect(
  // state => ({username : state.userInfo.username}),
  state => ({}),
  {
    deleteUserInfo:deleteUserInfoAction
  }
)
class Profile extends Component{
  state = {
    active1:[true,false,false],     //用高亮样式,默认不用
    active2:[true,false,false,false],
    roomCount:0,    //关注房子的数量
    pathname:'',   //获取当前的路径
    cancel:false,    //取消关注
    visible: false,   //是否展示提示框
    roomDetail:datas.data.list   //关注房子的对象
  }
  //展示提示框
  showModal = () => {
    this.setState({
      visible: true,
    })
  }
  //点击确定
  handleOk = () => {
    this.setState({
      visible: false,
    })
    //删除用户名和token
    this.props.deleteUserInfo()
    //跳转到首页
    this.props.history.replace('/home')
  }
  //点击取消
  handleCancel = () => {
    this.setState({
      visible: false,
    })
  }
  // 改变房子类型的样式
  changeActive1 = (index)=>{
    const {active1} = this.state
    let newActive1 = active1.map((item,i)=>{
      if (index === i) {
        item = true
      }else{
        item = false
      }
      return item
    })
    this.setState({
      active1:newActive1
    })
  }
  // 改变房子左侧类型的样式
  changeActive2 = (index) =>{
    const {active2} = this.state
    let newActive2 = active2.map((item,i)=>{
      if (index === i) {
        item = true
      }else{
        item = false
      }
      return item
    })
    this.setState({
      active2:newActive2
    })
    
  }
  //取消关注
  cancel = (id)=>{
    const {roomDetail} = this.state
    let newRoom = roomDetail.filter((room)=>{  //过滤出未取消关注的房源
      return room.houseId !== id 
    })
    this.setState({
      cancel:true,
      roomDetail:newRoom,   //更新房源的信息
      roomCount:newRoom.length   //更新关注房子的数量
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
      roomCount:lis.length,
    }) 

    //更新菜单样式
    let index = this.props.match.params.index
    this.changeActive2(index * 1)
  }
  render(){
    // 模拟数据
    const headerArrs = ['租房','海外','装修','商业办公','小区','百科','贝壳指数','发布房源','贝壳研究院']
    const {roomCount,active1,active2,roomDetail}  = this.state
    let {pathname} = this.props.location  //获取当前路径
    let username = JSON.parse(localStorage.getItem('user'))  //获取本地用户名
    let reg=/(\d{2})\d{7}(\d{2})/;
    username = username.replace(reg, "$1****$2")

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
              <span>{username}</span>
              <span className="logout-a" onClick={this.showModal}>退出</span>
              <Modal
                title="提示"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                okText='确定'
                cancelText='取消'
              >
                <p>您是否确定退出登录?</p>
              </Modal>
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
              <span>欢迎你,{username}</span>
            </div>
            <ul className="user-detail">
              <Link to="/profile/0">
                <li className={active2[0] ? 'active' : ''}  onClick={()=>this.changeActive2(0)}>关注的房源</li>
              </Link>
              <Link to="/profile/1">
                <li className={active2[1] ? 'active' : ''}  onClick={()=>this.changeActive2(1)}>关注的小区</li>
              </Link>
              <Link to="/profile/2">
                <li className={active2[2] ? 'active' : ''}  onClick={()=>this.changeActive2(2)}>我的搜索</li>
              </Link>
              <Link to="/profile/3">
                <li className={active2[3] ? 'active' : ''}  onClick={()=>this.changeActive2(3)}>我的资料</li>
              </Link>
            </ul>
          </div>
          {/* 右侧 */}
          <div className="main-right">
            {/* 标题 */}
            <RoomHeader key={pathname} roomCount={roomCount} pathname={pathname}/>
            {/* 房子类型 */}
            <div className={pathname === '/profile/0' ? 'room-list' : 'room-list display'}>
              <span className={active1[0] ? 'room-span active' : 'room-span'}  onClick={()=>this.changeActive1(0)}>二手房</span>
              <span className={active1[1] ? 'room-span active' : 'room-span'}  onClick={()=>this.changeActive1(1)}>新房</span>
              <span className={active1[2] ? 'room-span active' : 'room-span'}  onClick={()=>this.changeActive1(2)}>租房</span>
            </div>
            {/* 未关注房子的状态 */}
            <RoomContent roomCount={roomCount}/>
            {/* 关注房子的状态信息 */}
            <ul className={roomCount === 0 && !roomDetail ? 'roomList display' : 'roomList'} ref="roomlist">
              {
                roomDetail.map((room)=>{
                  return (
                    <li key={room.houseId}>
                      <div className="roomDetail">
                        <div className="roomImg">
                          <img src={room.imgSrc} alt=""/>
                        </div>
                        <div className="roomInfo">
                          <div className="roomTitle">
                            <p>{room.title}</p>
                          </div>
                          <div className="roomXqing">
                            <div className="roomMap">
                              <span>{room.communityName}</span>
                              <span>{room.roomNum}</span>
                              <span className="line">|</span>
                              <span>{room.square}平米</span>
                              <span className="line">|</span>
                              <span>{room.orientation}</span>
                            </div>
                            <div className="roomType">
                              <Link to="/ershoufang">二手房</Link>
                              <span className="xie">/</span>
                              <span>{room.floorStat}(共{room.totalFloor}层)</span>
                              <span className="xie">/</span>
                              <span>{room.buildYear} {room.hbtName}</span>
                            </div>
                          </div>
                          <div className="roomPrice">
                            <div className="price">
                              <span className="cum">{room.new_price_str}</span>
                              {room.new_price_str_unit}
                            </div>
                            <div className="price-pre">{room.new_unit_price_str} 元/m²</div>
                          </div>
                        </div>
                      </div>
                      {/* 取消关注 */}
                      <div className="delete-room" onClick={()=>this.cancel(room.houseId)}>
                        取消关注
                      </div>
                    </li>
                  )
                }) 
              }
              </ul>
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

export default Profile