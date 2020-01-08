import React,{Component} from 'react'
import "./footer.less";

export default class Footer extends Component {
  state = {
    navList:['商圈二手房','热门二手房','二手房','推荐小区','推荐楼盘','贝壳规则中心'],
    contentList:[
      ['明发雅苑二手房', '沿海赛洛城一期二手房', '星河城东区二手房', '柳芳北里二手房', '美利山二手房', '芳群园二区二手房','芳群园二区二手房','芳群园二区二手房','芳群园二区二手房','芳群园二区二手房','芳群园二区二手房','芳群园二区二手房','芳群园二区二手房','芳群园二区二手房','芳群园二区二手房','芳群园二区二手房','芳群园二区二手房','芳群园二区二手房','芳群园二区二手房','芳群园二区二手房','芳群园二区二手房', '龙湖香醍漫步四区南区二手房', '上海建筑二手房', '康庄路52号院二手房'],
      ['柳芳北里二手房', '美利山二手房', '沿海赛洛城一期二手房', '星河城东区二手房', '芳群园二区二手房', '龙湖香醍漫步四区南区二手房', '上海建筑二手房', '康庄路52号院二手房'],
      ['推荐二手房', '美利山二手房', '沿海赛洛城一期二手房', '星河城东区二手房', '芳群园二区二手房', '龙湖香醍漫步四区南区二手房', '上海建筑二手房', '康庄路52号院二手房'],
      ['推荐小区','万达广场','万达广场','万达广场','万达广场','万达广场','万达广场','万达广场','万达广场','万达广场','万达广场','万达广场','万达广场',],
      ['推荐楼盘','万达广场','万达广场','万达广场','万达广场','万达广场','万达广场','万达广场','万达广场','万达广场','万达广场','万达广场','万达广场',],
      ['贝壳隐私政策', '贝壳用户服务协议'],

    ],
    currentIndex:0
  }
  enter(index){
    this.setState({
      currentIndex : index
    })
  }

  render (){
    return(
      <div className="footerContainer">
        <div className="footerHeader">
          <span>网站地图</span>
          <span>了解贝壳</span>
        </div>
        <div className="footNav">
          <div className="navList">
            {
              this.state.navList.map((item,index)=>{
                return (
                  <span className={this.state.currentIndex === index? 'active' : ''} key={index} onMouseEnter={()=>this.enter(index)} >{item}</span>
                )
              })
            }
          </div>
          <div className="navContentShow">
            {
              this.state.contentList[this.state.currentIndex].map((item,index)=>{
                return (
                  <span className="navItem" key={index}>{item}</span>
                )
              })
            }
          </div>
        </div>
        <div className="bankShow">
            <img src={require('./imgs/zsyh.png')} alt=""/>
            <img src={require('./imgs/zxyh.png')} alt=""/>
            <img src={require('./imgs/gdyh.png')} alt=""/>
            <img src={require('./imgs/shyh.jpg')} alt=""/>
        </div>
        <div className="foot">
          <p>天津小屋信息科技有限公司 | 地址：天津经济技术开发区南港工业区综合服务区办公楼C座一层112室09单元 | 电话：10106188 | 津ICP备18000836号-1 | © Copyright 2020 ke.com版权所有 | 营业执照 | ICP证</p>
          <p>违法和不良信息举报电话：010-86440676 | 违法和不良信息举报邮箱：jubaoyouxiang@ke.com</p>
          <p>
            <img src={require('./imgs/beian.png')} alt=""/>
          津公网安备 12019002000223号
          </p>
        </div>
      </div>
    )
  }
}