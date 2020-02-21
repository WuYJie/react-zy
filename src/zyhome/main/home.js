import React, { Component } from 'react';
import img from 'C:/Users/13298/Desktop/wyj/1.jpg';
import img1 from './img/1.jpg';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './home.css';
import Photoplay from './imageplay/photoplay';

class Home extends Component {

    constructor(props){ 
        super(props);
        this.state = {
            produsts:[]
        }

    }
    
    componentDidMount() {
       const _this = this;
       axios.get('')
       .then(function (response){
            _this.setState({
                produsts:response.data,
            })
       })
       .catch(function (error){
            console.log("获取产品出错："+error);
       })
    }

    render() {
        return (
            <div className="zy_main">
                <Photoplay />   {/* 引入图片轮播组件*/}
                <section className="new-product">
                    <p><b>最新上市</b></p>
                    <div className="new-product-msg">
                        <div className="new-product-item x item-1">
                            <div className="product-img x">
                                <img src={img} alt="产品图片"></img>
                            </div>
                            <div className="product-desc x">
                                <div className="product-title">
                                    <b><span>Y01</span></b>
                                </div>
                                <div className="product-detail">
                                    <span>好看好看好看好看好看好看好看好看看好看好看好看好看</span>
                                </div>
                                <Link to="/ProductInfo" target="_self" title="查看详情">查看详情</Link>
                                {/* <a href="http://localhost:3000/#/ProductInfo">查看详情</a> */}
                            </div>
                        </div>

                        <div className="new-product-item x item-2">
                            <div className="product-img x">
                                <img src={img1} alt="产品图片"></img>
                            </div>
                            <div className="product-desc x">
                                <div className="product-title">
                                <b><span>Y02</span></b>
                                </div>
                                <div className="product-detail">
                                    <span>不好看</span><br/>
                                </div>
                                <Link to="/ProductInfo" target="_self" title="查看详情">查看详情</Link>
                            </div>
                        </div>
                        <div className="new-product-item d item-3">
                            <div className="product-img d">
                                <img src={img1} alt="产品图片"></img>
                            </div>
                            <div className="product-desc d">
                                <div className="product-title">
                                    <b><span>Y03</span></b>
                                </div>
                                <div className="product-detail">
                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;这个东西很好用，而且很好看，非常的高端大气上档次，真的真的我不骗你哦，你要是不信的话买一个回去看看，要是觉得不好完全可以退后</span><br/>
                                </div>
                                <a href="Aboutzy?a=1">查看详情</a>
                            </div>
                        </div>
                        <div className="new-product-item x">
                            <div className="product-img x">
                                <img src={img} alt="产品图片"></img>
                            </div>
                            <div className="product-desc x">
                                <div className="product-title">
                                <b><span>Y04</span></b>
                                </div>
                                <div className="product-detail">
                                    <span>不好看</span><br/>
                                </div>
                                <a href="Aboutzy?a=1">查看详情</a>
                            </div>
                        </div>
                        <div className="new-product-item x">
                            <div className="product-img x">
                                    <img src={img1} alt="产品图片"></img>
                                </div>
                                <div className="product-desc x">
                                    <div className="product-title">
                                    <b><span>Y05</span></b>
                                    </div>
                                    <div className="product-detail">
                                        <span>不好看</span><br/>
                                    </div>
                                    <a href="Aboutzy?a=1">查看详情</a>
                                </div>
                            </div>
                        {/* <div className="new-product-item d">
                            <div className="product-img d">
                                <img src={img} alt="产品图片"></img>
                            </div>
                            <div className="product-desc d">
                                <div className="product-title">
                                    <b><span>Y06</span></b>
                                </div>
                                <div className="product-detail">
                                    <span>不好看</span><br/>
                                    <a href="http://localhost:3000/#/ProductInfo">查看详情</a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </section>

                <section className="special-product">
                    <p><b>特别推荐</b></p>
                    <div className="special-product-msg">
                        
                        <div className="special-product-item left">
                            <div className="sproduct-img left">
                                <img src={img1} alt="产品图片"></img>
                            </div>
                            <a href="#">
                                <div className="sproduct-desc right">
                                    <div className="product-title">
                                        <b><span>C01</span></b>
                                    </div>
                                    <div className="sproduct-detail">
                                        <span>好看好看好看好看好看好看好看好看看好看好看好看好看好看好看好看</span>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="special-product-item right">
                            <div className="sproduct-img right">
                                <img src={img1} alt="产品图片"></img>
                            </div>
                            <a href="#">
                                <div className="sproduct-desc left">
                                    <div className="product-title">
                                        <b><span>C02</span></b>
                                    </div>
                                    <div className="sproduct-detail">
                                        <span>好看好看好看好看好看好看好看好看看好看好看好看好看好看好看好看</span>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="special-product-item left">
                            <div className="sproduct-img left">
                                <img src={img1} alt="产品图片"></img>
                            </div>
                            <a href="#">
                                <div className="sproduct-desc right">
                                    <div className="product-title">
                                        <b><span>C01</span></b>
                                    </div>
                                    <div className="sproduct-detail">
                                        <span>好看好看好看好看好看好看好看好看看好看好看好看好看好看好看好看</span>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* <div className="special-product-item right">
                            <div className="sproduct-img right">
                                <img src={img1} alt="产品图片"></img>
                            </div>
                            <a href="#">
                                <div className="sproduct-desc left">
                                    <div className="product-title">
                                        <b><span>C02</span></b>
                                    </div>
                                    <div className="sproduct-detail">
                                        <span>好看好看好看好看好看好看好看好看看好看好看好看好看好看好看好看</span>
                                    </div>
                                </div>
                            </a>
                        </div> */}
                        
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;