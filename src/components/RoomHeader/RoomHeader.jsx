import React,{Component} from 'react'

export default class RoomHeader extends Component{
  render(){
    const {roomCount} = this.props
    return (
      <div className="title">
        共 &nbsp;
        <span className="room-count">{roomCount}</span>&nbsp;
        套 关注房源
      </div>
    )
  }
}