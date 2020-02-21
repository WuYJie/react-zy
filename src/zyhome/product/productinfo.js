import React, { Component } from 'react';
import axios from 'axios';
import img1 from './imgs/info1.jpg';
import img2 from './imgs/info2.jpg';
import img3 from './imgs/info3.jpg';
import img4 from './imgs/info4.jpg';
import img6 from './imgs/info6.jpg';
import img7 from './imgs/info7.jpg';
import img8 from './imgs/info8.jpg';
import img9 from './imgs/info9.jpg';
import img10 from './imgs/info10.jpg';
import img11 from './imgs/info11.jpg';

class ProductInfo extends Component {

    constructor(props) {
        super(props);

        let productId;
        if(this.props.location.state){
            sessionStorage.setItem("productId",this.props.location.state.productid);    /* 存储session */
            productId = this.props.location.state.productid;
        } else {
            productId = sessionStorage.getItem("productId");        /* 获取session */
        }
        this.state = {
            productId : productId,
            product:{}
        }
    }

    componentDidMount() {
        const _this = this;
        // alert(_this.state.productId);
        // alert(_this.props.location.state.productid);
        // console.log(_this.props.location.state.productid);
    }

    componentWillUnmount() {
        sessionStorage.removeItem("productId"); //  当离开当前组件的时候删除session
    }

    getProductById () {
        const _this = this;
        axios.get('http://127.0.0.1:8081/ZYHOME/product/getProductInfoById')
        .then(function (response){
            _this.setState({
                product:response.data,
            })
        })
        .catch(function (error) {
            console.log("获取产品详情出错："+error)
        });
    }

    render() {
        return (
            <div>
                <div className="productinfo">
                    <img className="productinfo-img" src={img1} alt="ssw"/>
                    <img className="productinfo-img" src={img2} alt="ssw"/>
                    <img className="productinfo-img" src={img3} alt="ssw"/>
                    <img className="productinfo-img" src={img4} alt="ssw"/>
                    <img className="productinfo-img" src={img6} alt="ssw"/>
                    <img className="productinfo-img" src={img7} alt="ssw"/>
                    <img className="productinfo-img" src={img8} alt="ssw"/>
                    <img className="productinfo-img" src={img9} alt="ssw"/>
                    <img className="productinfo-img" src={img10} alt="ssw"/>
                    <img className="productinfo-img" src={img11} alt="ssw"/>
                </div>
            </div>
        );
    }
}

export default ProductInfo;