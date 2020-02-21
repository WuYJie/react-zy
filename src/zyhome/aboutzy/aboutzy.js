import React, { Component } from 'react';
import './aboutzy.css';

class Aboutzy extends Component {

    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="about-zy">
                <div className="aboutzytitle">
                    <br/>
                    <span>ABOUT ZYINNO</span>
                    <br/><span>关于智宇</span>
                </div>
                <section className="aboutzy vision">
                    <div className="zbout_context">
                        <div className="aboutzy_img">
                            <img src={require('./img/about-img-1.jpg')}/>
                        </div>
                        <div className="aboutzy_desc">
                            <h1>这里是公司简介</h1>
                            <span>智宇创新是一家好公司，专注于手机周边，智能家电等服务的无耻无耻成为第五次CDC希望成为五分</span><br/>
                            <span>智宇创新是一家好公司，专注于手机周边，智能家电等服务的无耻无耻</span><br/>
                            <span>智宇创新是一家好公司，专注于手机周边，智能家电等服务的无耻无耻成为第五次CDC希望成为五分，智能家电等服务的无耻无耻成为第五次CDC希望成为五分</span>
                        </div>
                    </div>
                </section>
                <section className="aboutzy values">公司价值观
                    <div className="container">
                        <div className="row">
                            <div className="content-title">
                                <h3 className="main-title">BRAND VALUES</h3>
                                <h3 className="sub-title">公司价值观</h3>
                            </div>
                        </div>
                    </div>
                    <div className="values-wrapper">这里需要引入图片
                        <div className="values-item">
                            <div className="item-img 1"></div>
                            <div className="item-desc"></div>
                        </div>
                        <div className="values-item">
                            <div className="item-img 2"></div>
                            <div className="item-desc"></div>
                        </div>
                        <div className="values-item">
                            <div className="item-img 3"></div>
                            <div className="item-desc"></div>
                        </div>
                        <div className="values-item">
                            <div className="item-img 4"></div>
                            <div className="item-desc"></div>
                        </div>
                    </div>
                </section>
                <section className="aboutzy philosophy">经营理念
                    <div className="container">
                        <div className="row">
                            <div className="content-title">
                                <h3 className="main-title">BUSINESS PHILOSOPHY</h3>
                                <h3 className="sub-title">经营理念</h3>
                            </div>
                        </div>
                    </div>
                    <div className="philosophy-wrapper">
                        <div className="philosophy-item">
                            <div className="item">
                                <h3 className="title">品质第一</h3>
                            </div>
                            <div className="item-desc">
                                <p>严谨务实，精益求精，严把质量关，保障运行无故障。</p>
                            </div>
                        </div>
                        <div className="philosophy-item">
                            <div className="item">
                                <h3 className="title">服务至上</h3>
                            </div>
                            <div className="item-desc">
                                <p>热情，真诚，耐心，为每一个用户提供优质的服务！</p>
                            </div>
                        </div>
                        <div className="philosophy-item">
                            <div className="item">
                                <h3 className="title">设计优先</h3>
                            </div>
                            <div className="item-desc">
                                <p>以设计为驱动，执着于原创，为产品赋予灵魂。</p>
                            </div>
                        </div>
                       
                    </div>
                </section>

                <div className="brand">
                    <section className="aboutzy-brand">
                        <div className="brand-banner">
                            <div className="brand-title">
                                <h3 className="title-en">ABOUT BRAND</h3>
                                <h3 className="title-cn">关于品牌</h3>
                            </div>
                            <div className="brand-context">
                                <p>锐思（Recci）源于一颗平稳、积极、进取的心。</p>

                                <p>为挑战者传递信息、为体验着制造惊喜、为设计者共享荣辱，正是这些朋友，驱使我们去思考、探索，未知的可能。</p>

                                <p>为科技而生，执着于原创、新锐、潮流，这就是锐思。</p>
                            </div>
                        </div>
                    </section>
                    <section className="aboutzy ppjs">
                        <div className="brand-title">
                            <h3 className="title-en">ABOUT BRAND</h3>
                            <h3 className="title-cn">品牌介绍</h3>
                        </div>
                        <div className="brand-context">
                            <p>锐思（Recci）成立于2015年，是美能格（香港）控股有限公司旗下品牌、锐思Recci是一个融合原创、新锐、潮流的品牌。截至2017年年底，

                                锐思产品在短时间内，迅速成为影响整个中国消费电子市场的明星产品。锐思因梦想而立，热爱而极致，专注和长久的追求，面向全球提供高品

                                质的通讯外设产品及服务。
                            </p>
                            <p>

                                锐思Recci拥有完整而严密的【创意灵感- -设计研发- -生产制造- -供应链整合- -订单支持- -仓储物流- -品牌传播- -整合营销- -角色共赢】闭环

                                产业链。锐思Recci为合作伙伴及顾客提供高附加值的优质产品及服务，致力于锐思Recci品牌在广泛领域的良好互动，使锐思recci在全球范围

                                内成为最具竞争力和影响力的高端通讯外设品牌，引领行业发展方向。
                            </p>
                        </div>
                    </section>
                    {/* <section className="aboutzy ppjs">品牌介绍</section> */}
                </div>
            </div>
        );
    }
}

export default Aboutzy;