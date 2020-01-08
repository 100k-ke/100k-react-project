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
    }else if(pathname === '/profile/3'){
      this.setState({title : '个 资料'})
    }
  }
  render(){
    const {roomCount} = this.props
    const {title} = this.state
    return (
      <div className="title" >
        共 &nbsp;
        <span className="room-count">{roomCount}</span>&nbsp;
        {title}
      </div>
    )
  }
}