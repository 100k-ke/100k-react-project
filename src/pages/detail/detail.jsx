import React,{Component} from 'react' 
import { Pagination,Row, Col  } from 'antd';
import {connect} from 'react-redux'
import Swiper from 'swiper';
import { createSaveAttensionHouse } from "../../redux/actions/detailHouse_actions";
import Footer from "../../components/footer/footer";
import { reqDetailRecommend } from "../../api/index";
import "./detail.less";

@connect(
  state => ({}),
  {
    // action的本质是函数
    saveAttensionHouse :createSaveAttensionHouse
  }
)
class Detail extends Component {
  state = {
    navList:['商圈二手房','热门二手房','二手房','推荐小区','推荐楼盘','贝壳规则中心'],
    recommendList:[],
    isShow:false,  // 鼠标落到户型小图上时出现遮罩
    isOpen:false  // 控制户型大图显示隐藏
  }
  componentDidMount(){
    // 缩略图
    var thumbsSwiper = new Swiper(this.refs.imgContainer1,{
      spaceBetween: 10,
      slidesPerView: 5,
      watchSlidesVisibility: true,//防止不可点击
    })
    new Swiper(this.refs.imgContainer,{
      spaceBetween: 10,
      thumbs: {
        swiper: thumbsSwiper,
      }
    })
    this.getRecommend()
  }

  async getRecommend() {
    let result = await reqDetailRecommend()
    console.log(result);
    if (result.status === 1) {
      this.setState({
        recommendList : result.datas.data.recommend
      })
      
    }
  }
  // 显示大图
  showBigLayout(){
    this.setState({
      isShow:true
    })
  }
  // 点击关注房源，将房源的信息，存入到redux
  attentionHouse(){
    this.props.saveAttensionHouse('1')
  }

  render (){
    return (
      <div>
        <div className="container">
          <div className="headerShow">
            <div className="showContainer">
              <header>
                <i></i>
                <div className="searchBox">
                  <span className="isCelling">在售</span>
                  <input type="text" placeholder="请输入关键字搜索"/>
                  <span className="search">
                    <i></i>
                  </span>
                </div>
              </header>
              <section>
                <div className="sectionLeft">
                  <h1>东南向三居室 业主随时签约</h1>
                  <div className="sub">此房满五年，业主在北京一套住房，首套契税1.5%，二套3%</div>
                </div>
                <div className="sectionRight">
                  <button onClick={()=>this.attentionHouse()}>关注房源</button>
                  <span>112人已关注</span>
                </div>
              </section>
            </div>
          </div>
          <div className="intro">
            <ul className="introLeft">
              <li>北京新</li>
              <li>></li>
              <li>北京二手房</li>
              <li>></li>
              <li>丰台二手房</li>
              <li>></li>
              <li>青塔二手房</li>
              <li>></li>
              <li>青塔秀园二手房</li>
            </ul>
            <div className="introRight">
              <div className="suber">
                <div className="suber1">
                  <img src={require("./imgs/1.png")} alt=""/>
                  <span>房源发布人</span>
                </div>
                <div className="suber1">
                  <img src={require("./imgs/2.png")} alt=""/>
                  <span>房源发布机构</span>
                </div>
              </div>
              <div className="share">
                <i></i>
                <span>分享此房源</span>
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="bannerLeft">
              <div className="imgCons swiper-container" ref="imgContainer">
                <div className="swiper-wrapper" id="imgWrapper">
                  <div className="swiper-slide">
                    <img src={require("./imgs/1.jpg")} alt=""/>
                  </div>
                  <div className="swiper-slide">
                    <img src={require("./imgs/2.jpg")} alt=""/>
                  </div>
                  <div className="swiper-slide">
                    <img src={require("./imgs/3.jpg")} alt=""/>
                  </div>
                  <div className="swiper-slide">
                    <img src={require("./imgs/4.jpg")} alt=""/>
                  </div>
                  <div className="swiper-slide">
                    <img src={require("./imgs/5.jpg")} alt=""/>
                  </div>
                  <div className="swiper-slide">
                    <img src={require("./imgs/6.jpg")} alt=""/>
                  </div>
                  <div className="swiper-slide">
                    <img src={require("./imgs/7.jpg")} alt=""/>
                  </div>
                  
                </div>
              </div>
              <div className="imgScroll swiper-container"  ref="imgContainer1">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img src={require("./imgs/1.jpg")} alt=""/>
                  </div>
                  <div className="swiper-slide">
                    <img src={require("./imgs/2.jpg")} alt=""/>
                  </div>
                  <div className="swiper-slide">
                    <img src={require("./imgs/3.jpg")} alt=""/>
                  </div>
                  <div className="swiper-slide">
                    <img src={require("./imgs/4.jpg")} alt=""/>
                  </div>
                  <div className="swiper-slide">
                    <img src={require("./imgs/5.jpg")} alt=""/>
                  </div>
                  <div className="swiper-slide">
                    <img src={require("./imgs/6.jpg")} alt=""/>
                  </div>
                  <div className="swiper-slide">
                    <img src={require("./imgs/7.jpg")} alt=""/>
                  </div>
                  
                
                </div>
              </div>
              <div className="guarantee">
                <i></i>
                <span>真实存在，真实在售，真实价格，真实图片，假一赔百元</span>
              </div>
            </div>
            <div className="bannerRight">
              <div className="priceCon">
                <span className="price">279万元</span>
                <div className="unitPrice">
                  <div className="p">49982.1 元/平米</div>
                  <div className="taxtext">首付及税费情况请咨询经纪人</div>
                </div>
              </div>
              <div className="houseIntro">
                <div className="floor">
                  <p className="mainH">2室1厅</p>
                  <p className="secH">高层楼/共6层</p>
                </div>
                <div className="direction">
                  <p className="mainH">南 北</p>
                  <p className="secH">平层/精装</p>
                </div>
                <div className="area">
                  <p className="mainH">55.82平米</p>
                  <p className="secH">1993年建/板楼</p>
                </div>
              </div>
              <div className="villageIntro">
                <div className="villageName">
                  <span className="name">小区名称</span>
                  <span className="info">青塔秀园</span>
                </div>
                <div className="villageArea">
                  <span className="name">小区位置</span>
                  <span className="info">丰台 青塔</span>
                </div>
                <div className="watchTime">
                  <span className="name">看房时间</span>
                  <span className="info">可看时间请咨询经纪人</span>
                </div>
                <div className="beikeNum">
                  <span className="name">贝壳编号</span>
                  <span className="info">19052618283198402342893 举报</span>
                </div>
              </div>
              <div className="houseDefender">
                <div className="image">
                  <img src={require("./imgs/qi.jpg")}alt=""/>
                </div>
                <div className="defenderName">
                  <div className="name">
                    <span className="miracle">陈奇</span>
                    <span className="beikeer">链家</span>
                    <img src={require('./imgs/1.png')} alt=""/>
                  </div>
                  <div className="houseChange">
                    本房信息由我维护，有变化最快得知
                  </div>
                </div>
              </div>
              <div className="phoneNumber">
                <div className="numberLeft">
                  400888888 转 93523
                </div>
                <div className="numberRight">
                  <img src={require('./imgs/im-chart@2x.png')} alt=""/>
                  <span>在线问</span>
                </div>
              </div>
            </div>
          </div>
          <div className="houseDetailInfo">
            <div className="houseInfos1">
              <div className="baseInfo">
                <h1>房源基本信息</h1>
                <div className="baseProperty">
                  <div className="bp-l">基本属性</div>
                  <ul className="bp-r">
                    <li className="hx">
                      <span className="propertyName">房屋户型</span>
                      <span className="propertyData">2室1厅1卫</span>
                    </li>
                    <li className="mj">
                      <span className="propertyName">建筑面积</span>
                      <span className="propertyData">55.82㎡</span>
                    </li>
                    <li className="lx">
                      <span className="propertyName">建筑类型</span>
                      <span className="propertyData">板楼</span>
                    </li>
                    <li className="lx">
                      <span className="propertyName">建筑类型</span>
                      <span className="propertyData">板楼</span>
                    </li>
                    <li className="lx">
                      <span className="propertyName">建筑类型</span>
                      <span className="propertyData">板楼</span>
                    </li>
                    <li className="lx">
                      <span className="propertyName">建筑类型</span>
                      <span className="propertyData">板楼</span>
                    </li>
                    <li className="lx">
                      <span className="propertyName">建筑类型</span>
                      <span className="propertyData">板楼</span>
                    </li>
                    <li className="lx">
                      <span className="propertyName">建筑类型</span>
                      <span className="propertyData">板楼</span>
                    </li>
                    <li className="lx">
                      <span className="propertyName">建筑类型</span>
                      <span className="propertyData">板楼</span>
                    </li>
                    <li className="lx">
                      <span className="propertyName">建筑类型</span>
                      <span className="propertyData">板楼</span>
                    </li>
                  
                  </ul>
                </div>
                <div className="cellProperty">
                  <div className="cp-l">交易属性</div>
                  <ul className="cp-r">
                    <li>
                      <span className="propertyName">挂牌时间</span>
                      <span className="propertyValue">2019年05月26日</span>
                    </li>
                    <li>
                      <span className="propertyName">上次交易</span>
                      <span className="propertyValue">2012年05月26日</span>
                    </li>
                    <li>
                      <span className="propertyName">房屋期限</span>
                      <span className="propertyValue">满5年</span>
                    </li>
                    <li>
                      <span className="propertyName">交易属性</span>
                      <span className="propertyValue">有抵押 25万元</span>
                    </li>
                    <li>
                      <span className="propertyName">房屋用途</span>
                      <span className="propertyValue">普通住宅</span>
                    </li>
                    <li>
                      <span className="propertyName">房屋权属</span>
                      <span className="propertyValue">商品</span>
                    </li>
                    <li>
                      <span className="propertyName">产权所属</span>
                      <span className="propertyValue">非公共</span>
                    </li>
                    <li>
                      <span className="propertyName">房本备件</span>
                      <span className="propertyValue">已上传</span>
                    </li>
                  </ul>
                </div>
                <div className="remind">注：房源所示“房屋用途、交易权属、建成年代、产权年限、建筑结构”仅供参考，购房时请以房本信息为准。</div>
              </div>
              <div className="houseFeature">
                <h1>本房源特色</h1>
                <ul className="featureDetail">
                  <li>
                    <span className="featureName">房源特色</span>
                    <span className="featureValue">
                      <span className="valueStyle">满五年</span>
                      <span className="valueStyle">VR看装修</span>
                    </span>
                  </li>
                  <li>
                    <span className="featureName">核心卖点</span>
                    <span className="featureValue">此房满五年唯一，税费少，带阁楼，南北通透，精装修
                    </span>
                  </li>
                  <li>
                    <span className="featureName">户型介绍</span>
                    <span className="featureValue">此房为南北向二室一厅一卫，户型方正，南北通透，主卧朝南带阳台采光和视野很好，厨房朝北带小阳台，北侧的露台已经做成一间卧室，顶层挑高比较高，带一间阁楼，业主装修的时候做了一个楼梯，上下阁楼很方便，可以作为储藏间或者书房使用。
                    </span>
                  </li>
                  <li>
                    <span className="featureName">税费解析</span>
                    <span className="featureValue">房子是满五年的商品房，同时又是业主家庭一套住房，首套有契税1%，二套有3%契税。
                    </span>
                  </li>
                  <li>
                    <span className="featureName">售房详情</span>
                    <span className="featureValue">房子是业主7年前买的房子，装修好后一直自己居住，没有出租过，房子保持的很好。
  售房原因：业主是为了改善换房，所以诚心出售此房，欢迎有缘分的客户实地看房子
                    </span>
                  </li>
                </ul>
                <div className="remind1">注：1.房源介绍中的周边配套、在建设施、规划设施、地铁信息、绿化率、得房率、容积率等信息为通过物业介绍、房产证、实勘、政府官网等渠道获取，因时间、政策会发生变化，与实际情况可能略有偏差，房源介绍仅供参考。 2.房源介绍中与距离相关的数据均来源于百度地图。 3.土地使用起止年限详见业主土地证明材料或查询相关政府部门的登记文件。
                </div>
              </div>
              <div className="houseOwner">
                <h1>房主自荐</h1>
                <p>业主在链家网或“贝壳APP”发表的内容(包括但不限于评论、房屋信息等)仅供参考，且仅表明其个人的立场和观点。业主发表的任何内容均不代表链家的立场或观点，链家亦未对其进行任何授权、同意或确认。如您发现有任何违法、侵权或其他不适宜内容的，请您及时与链家联系。</p>
              </div>
              <div className="bd">
                <div className="bdLeft"></div>
                <div className="bdRight">
                  <p><span className="qd">房源特色：</span><span>这个房子一直自家居住，南北通透，通风优秀，光线很好很明亮，是居住愉悦、舒服的房子。几乎没有公建面积，还赠送露台阁楼，露台已封闭，相当于白多出来一个房间，朋友75平新房都没有此房空间大。性价比高。</span></p>
                  <p><span className="qd">小区环境：</span><span>这个小区是成熟社区，四通八达，出小区北侧是青塔蔚园车站，出小区南门是大成里车站，西门是64路终点站。小区东南角有苏宁、翠微百货、盒马鲜生、菜市场超市都有。小区内青塔二幼是北京一级一类公立幼儿园。</span></p>
                </div>
              </div>
              <div className="leadWatch">
                <div className="leadHeader">
                  <h1>经纪人带看反馈</h1>
                  <div className="watchMore">
                    <span className="more">带看最多</span>
                    <span className="new">最新</span>
                  </div>
                </div>
                <ul className="watchList">
                  <li>
                    <div className="headPic">
                      <img src={require('./imgs/qi.jpg')} alt=""/>
                    </div>
                    <div className="watchDetail">
                      <div className="detailHeader">
                        <div className="hl">
                          <span className="cq">陈奇</span>
                          <span className="org">贝壳</span>
                          <img src={require('./imgs/1.png')} alt=""/>
                        </div>
                        <div className="hr">
                          <span className="hotNumber">40082198230转12193</span>
                          <span className="onLineQuestion"><img src={require('./imgs/im-chart@2x.png')} alt=""/>在线问</span>
                        </div>
                      </div>
                      <div className="content">您好，我是链家陈奇。（大学本科毕业），选择我就是选择一个团队Team，我们将提供专业的购房建议！ 我注重服务而非佣金，关注交易安全而非销售。我本人对交易风险把控意识强，从业为百名购房者提供服务。愿我用专业和热情告知您房子优缺点！也许我正是您（合适的委托人），期待您的来电！
                      </div>
                      <div className="historyWatch">2019/11/26 带客户看过此房，共带看本房2次
                          
                      </div>
                    </div>
                    <div className="useful">有用</div>
                  </li>
                  <li>
                    <div className="headPic">
                      <img src={require('./imgs/qi.jpg')} alt=""/>
                    </div>
                    <div className="watchDetail">
                      <div className="detailHeader">
                        <div className="hl">
                          <span className="cq">陈奇</span>
                          <span className="org">贝壳</span>
                          <img src={require('./imgs/1.png')} alt=""/>
                        </div>
                        <div className="hr">
                          <span className="hotNumber">40082198230转12193</span>
                          <span className="onLineQuestion"><img src={require('./imgs/im-chart@2x.png')} alt=""/>在线问</span>
                        </div>
                      </div>
                      <div className="content">您好，我是链家陈奇。（大学本科毕业），选择我就是选择一个团队Team，我们将提供专业的购房建议！ 我注重服务而非佣金，关注交易安全而非销售。我本人对交易风险把控意识强，从业为百名购房者提供服务。愿我用专业和热情告知您房子优缺点！也许我正是您（合适的委托人），期待您的来电！
                      </div>
                      <div className="historyWatch">2019/11/26 带客户看过此房，共带看本房2次
                      </div>
                    </div>
                    <div className="useful">有用</div>
                  </li>
                  <li>
                    <div className="headPic">
                      <img src={require('./imgs/qi.jpg')} alt=""/>
                    </div>
                    <div className="watchDetail">
                      <div className="detailHeader">
                        <div className="hl">
                          <span className="cq">陈奇</span>
                          <span className="org">贝壳</span>
                          <img src={require('./imgs/1.png')} alt=""/>
                        </div>
                        <div className="hr">
                          <span className="hotNumber">40082198230转12193</span>
                          <span className="onLineQuestion"><img src={require('./imgs/im-chart@2x.png')} alt=""/>在线问</span>
                        </div>
                      </div>
                      <div className="content">您好，我是链家陈奇。（大学本科毕业），选择我就是选择一个团队Team，我们将提供专业的购房建议！ 我注重服务而非佣金，关注交易安全而非销售。我本人对交易风险把控意识强，从业为百名购房者提供服务。愿我用专业和热情告知您房子优缺点！也许我正是您（合适的委托人），期待您的来电！
                      </div>
                      <div className="historyWatch">2019/11/26 带客户看过此房，共带看本房2次
                          
                      </div>
                    </div>
                    <div className="useful">有用</div>
                  </li>
                </ul>
                <Pagination simple defaultCurrent={1} defaultPageSize={3} total={15} />
              </div>
              <div className="houseType">
                <div className="typeHeader">
                  <h1>该户型分间</h1>
                </div>
                <div className="houseTypePic">
                  <div className="imgCon" onMouseEnter={()=>this.setState({isShow:true})} onMouseLeave={()=>this.setState({isShow:false})}>
                    <img src={require('./imgs/sp.jpg')} alt=""/>
                    <div className="zz" style={{display : this.state.isShow ? 'block' :'none'}} onClick={()=>this.setState({isOpen:true})}>
                      <i></i>
                      <span>查看更多</span>
                    </div>
                  </div>
                  <div className="des">
                    <Row>
                      <Col span={6}>卧室A</Col>
                      <Col span={6}>6.83平</Col>
                      <Col span={6}>北</Col>
                      <Col span={6}>普通窗</Col>
                    </Row>
                    <Row>
                      <Col span={6}>卧室B</Col>
                      <Col span={6}>15.59平</Col>
                      <Col span={6}>南</Col>
                      <Col span={6}>普通窗</Col>
                    </Row>
                    <Row>
                      <Col span={6}>客厅</Col>
                      <Col span={6}>12.59平</Col>
                      <Col span={6}>南</Col>
                      <Col span={6}>无窗</Col>
                    </Row>
                    <Row>
                      <Col span={6}>阳台</Col>
                      <Col span={6}>4.59平</Col>
                      <Col span={6}>南</Col>
                      <Col span={6}>普通窗</Col>
                    </Row>
                    <Row>
                      <Col span={6}>阳台</Col>
                      <Col span={6}>4.59平</Col>
                      <Col span={6}>南</Col>
                      <Col span={6}>普通窗</Col>
                    </Row>
                    <Row>
                      <Col span={6}>阳台</Col>
                      <Col span={6}>4.59平</Col>
                      <Col span={6}>南</Col>
                      <Col span={6}>普通窗</Col>
                    </Row>
                    <Row>
                      <Col span={6}>阳台</Col>
                      <Col span={6}>4.59平</Col>
                      <Col span={6}>南</Col>
                      <Col span={6}>普通窗</Col>
                    </Row>
                    <Row>
                      <Col span={6}>阳台</Col>
                      <Col span={6}>4.59平</Col>
                      <Col span={6}>南</Col>
                      <Col span={6}>普通窗</Col>
                    </Row>
                    <Row>
                      <Col span={6}>阳台</Col>
                      <Col span={6}>4.59平</Col>
                      <Col span={6}>南</Col>
                      <Col span={6}>普通窗</Col>
                    </Row>
                  </div>
                  
                </div>
                <div className="remind2">
                  注：户型图标注的面积不同于房本面积，是实地测量后计算的地板面积，存在测量误差，购房请以房本面积为准。
                  </div>
              </div>
              <div className="housePics">
                <h1>此房源照片</h1>
                <div className="picsCon">
                  <img className="mainPic" src={require('./imgs/1.jpg')} alt=""/>
                  <div className="otherImgs">
                    <img src={require('./imgs/2.jpg')} alt=""/>
                    <img src={require('./imgs/3.jpg')} alt=""/>
                    <img src={require('./imgs/4.jpg')} alt=""/>
                    <img src={require('./imgs/5.jpg')} alt=""/>
                    <img src={require('./imgs/6.jpg')} alt=""/>
                    <img src={require('./imgs/7.jpg')} alt=""/>
                  </div>
                </div>
              </div>
              <div className="valligeIntro">
                <div className="introHeader">
                  <h1>青塔秀园简介</h1>
                  <a href="https://bj.ke.com/xiaoqu/1111027378928/">查看小区详情</a>
                </div>
                <div className="valligeDetail">
                  <ul className="valligeLeft">
                    <li>
                      <span className="valligeName">小区均价</span>
                      <span className="valligeValue">47694元/㎡</span>
                    </li>
                    <li>
                      <span className="valligeName">建筑年代</span>
                      <span className="valligeValue">1992年建成</span>
                    </li>
                    <li>
                      <span className="valligeName">建筑类型</span>
                      <span className="valligeValue">塔楼/板楼</span>
                    </li>
                    <li>
                      <span className="valligeName">楼栋总数</span>
                      <span className="valligeValue">21栋</span>
                    </li>
                  </ul>
                  <div className="valligeRight">
                    <img src={require('./imgs/h.jpg')} alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div className="highQualityHouses">
              <div className="highQHeader">
                <h1>为您推荐优质房源</h1>
              </div>
              <ul className="hqHousesList">
                {
                  this.state.recommendList.map((item)=>{
                    return(
                      <li className="hqHousesItem" key={item.id}>
                        <img src={item.picture} alt={item.desc}/>
                        <img className="goodHouse" style={{display : item.isGoodHouse? 'block' :'none'}} src={require('./imgs/goodhouse.png')} alt=""/>
                        <div className="highDetail">
                          <div className="houseVallige">
                            <p className="area"><span>{item.districtName}</span></p>
                            <p className="vallige"><span>{item.resblockName}</span></p>
                          </div>
                          <div className="layout">
                            <span>{item.jushi}·{item.area}平</span>
                            <span className="price">{item.price}万</span>
                          </div>
                        </div>
                      </li>
                    )
                  })
                }
                
              </ul>
            </div>
            <Footer></Footer>
          </div>
        </div>
        {/* 户型图的大图显示 */}
        <div className="bigLayoutShow" style={{display : this.state.isOpen ? 'block' :'none'}}>
        <div className="conCont">
          <div className="conLeft">
            <img src={require('./imgs/bp.jpg')} alt=""/>
          </div>
          <div className="conRight">
            <div className="top">
              <h1>户型分间</h1>
              <i onClick={()=>this.setState({isOpen:false})}>×</i>
              <p className="huxts">户型特色</p>
              <p>卧室带阳台、明厨</p>
            </div>
            <div className="down">
              <Row>
                <Col span={6}>卧室A</Col>
                <Col span={6}>6.83平</Col>
                <Col span={6}>北</Col>
                <Col span={6}>普通窗</Col>
              </Row>
              <Row>
                <Col span={6}>卧室B</Col>
                <Col span={6}>15.59平</Col>
                <Col span={6}>南</Col>
                <Col span={6}>普通窗</Col>
              </Row>
              <Row>
                <Col span={6}>客厅</Col>
                <Col span={6}>12.59平</Col>
                <Col span={6}>南</Col>
                <Col span={6}>无窗</Col>
              </Row>
              <Row>
                <Col span={6}>阳台</Col>
                <Col span={6}>4.59平</Col>
                <Col span={6}>南</Col>
                <Col span={6}>普通窗</Col>
              </Row>
              <Row>
                <Col span={6}>阳台</Col>
                <Col span={6}>4.59平</Col>
                <Col span={6}>南</Col>
                <Col span={6}>普通窗</Col>
              </Row>
              <Row>
                <Col span={6}>阳台</Col>
                <Col span={6}>4.59平</Col>
                <Col span={6}>南</Col>
                <Col span={6}>普通窗</Col>
              </Row>
              <Row>
                <Col span={6}>阳台</Col>
                <Col span={6}>4.59平</Col>
                <Col span={6}>南</Col>
                <Col span={6}>普通窗</Col>
              </Row>
              <Row>
                <Col span={6}>阳台</Col>
                <Col span={6}>4.59平</Col>
                <Col span={6}>南</Col>
                <Col span={6}>普通窗</Col>
              </Row>
              <Row>
                <Col span={6}>阳台</Col>
                <Col span={6}>4.59平</Col>
                <Col span={6}>南</Col>
                <Col span={6}>普通窗</Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Detail