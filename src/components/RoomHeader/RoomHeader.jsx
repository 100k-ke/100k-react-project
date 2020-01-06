import React,{Component} from 'react'

export default class RoomHeader extends Component{
  state = {
    title:'套 关注房源'
  }
  componentDidMount(){
    const {pathname} = this.props
    if(pathname === '/profile/0'){
      this.setState({title : '套 关注房源'})
    }else if(pathname === '/profile/1'){
      this.setState({title : '个 关注小区'})
    }else if(pathname === '/profile/2'){
      this.setState({title : '个 已保存搜索'})
    }
  }
  render(){
    const {roomCount,pathname} = this.props
    const {title} = this.state
    return (
      <div className={pathname === '/profile/3' ? "title display" : "title"} >
        共 &nbsp;
        <span className="room-count">{roomCount}</span>&nbsp;
        {title}
      </div>
    )
  }
}