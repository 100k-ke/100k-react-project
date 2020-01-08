import React,{Component} from 'react'
import './RoomContent.less'

export default class RoomContent extends Component{
  render(){
    const {roomCount} = this.props
    return (
      <div className={roomCount === 0 ? 'room-detail' : 'room-detail display'}>
        <div className="room-logo"></div>
        <p className="room-text">还没有任何关注哦</p>
      </div>
    )
  }
}