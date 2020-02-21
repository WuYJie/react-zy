import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router,Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Pagecomponent from '../page/components/Pagecomponent';

import './product.css';

class Product extends Component {

    constructor(props){
        super(props);
        this.state = {
            product : {},
            products : [],
            producttype : null,
            producttypes : [],
            totalPage : 1,  //总页数
            pageNum : 1,    //当前页
            groupCount: 5, //页码分组，显示7个页码，其余用省略号显示
            startPage: 1,  //分组开始页码
        }
        // this.getCurrentPage = this.getCurrentPage.bind(this)
    }
    
    //  进入该组件时执行
    componentDidMount(props) {
        const _this = this; //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        _this.getProductType();
        _this.getProductList();
        // _this.getProductDesc("hello "," world");
    }
    
    // 获取产品分类
    getProductType =() => {
        const _this = this;
        axios.get('http://127.0.0.1:8081/ZYHOME/product/getProductType')
        .then(function (response) {
            _this.setState({
                producttypes:response.data,
            })
        })
        .catch(function (error) {
            alert("查询产品类型出错:"+error);
        });
    }

    // 获取产品列表
    getProductList =(productType,pageNum) => {
        const _this = this;
        if(productType == "" || productType == null || productType == "undefined"){
            productType = _this.state.producttype;
        }
        console.log("当前产品类型为："+productType+";当前页为："+pageNum);
        axios.get('http://127.0.0.1:8081/ZYHOME/product/getProductList',{
            params :{
                productType: productType,
                page: pageNum
            }
        })
        .then(function (response){
            _this.setState({
                products:response.data.products,
                page:response.data,
                producttype:productType,
                pageNum:response.data.pagenum,
                totalPage:response.data.pages,
            })
            // console.log(_this.state.pageNum);
            // console.log(response.data);
        })
        .catch(function (error) {
            console.log("获取产品列表出错："+error);
        });
    }

    // 获取产品详情
    getProductInfo =() => {
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

    // 生成页码
    createPage() {
        const {pageNum, groupCount, startPage,totalPage} = this.state;
        let pages = []
        //上一页
        pages.push(<li className={pageNum === 1 ? "nomore" : null} onClick={this.prePageHandeler.bind(this)}
                       key={0}>
            上一页</li>)

        if (totalPage <= 10) {
            /*总页码小于等于10时，全部显示出来*/
            for (let i = 1; i <= totalPage; i++) {
                pages.push(<li key={i} onClick={this.pageClick.bind(this, i)}
                               className={pageNum === i ? "activePage" : null}>{i}</li>)
            }
        } else {
            /*总页码大于10时，部分显示*/

            //第一页
            pages.push(<li className={pageNum === 1 ? "activePage" : null} key={1}
                           onClick={this.pageClick.bind(this, 1)}>1</li>)

            let pageLength = 0;
            if (groupCount + startPage > totalPage) {
                pageLength = totalPage
            } else {
                pageLength = groupCount + startPage;
            }
            //前面省略号(当当前页码比分组的页码大时显示省略号)
            if (pageNum >= groupCount) {
                pages.push(<li className="" key={-1}>···</li>)
            }
            //非第一页和最后一页显示
            for (let i = startPage; i < pageLength; i++) {
                if (i <= totalPage - 1 && i > 1) {
                    pages.push(<li className={pageNum === i ? "activePage" : null} key={i}
                                   onClick={this.pageClick.bind(this, i)}>{i}</li>)
                }
            }
            //后面省略号
            if (totalPage - startPage >= groupCount + 1) {
                pages.push(<li className="" key={-2}>···</li>)
            }
            //最后一页
            pages.push(<li className={pageNum === totalPage ? "activePage" : null} key={totalPage}
                           onClick={this.pageClick.bind(this, totalPage)}>{totalPage}</li>)
        }
        //下一页
        pages.push(<li className={pageNum === totalPage ? "nomore" : null}
                       onClick={this.nextPageHandeler.bind(this)}
                       key={totalPage + 1}>下一页</li>)
        return pages;
    }

    //页码点击
    pageClick(currentPage) {
        const {groupCount} = this.state;
        //当 当前页码 大于 分组的页码 时，使 当前页 前面 显示 两个页码
        if (currentPage >= groupCount) {
            this.setState({
                startPage: currentPage - 2,
            })
        }
        if (currentPage < groupCount) {
            this.setState({
                startPage: 1,
            })
        }
        //第一页时重新设置分组的起始页
        if (currentPage === 1) {
            this.setState({
                startPage: 1,
            })
        }
        this.setState({
            currentPage
        })
        // alert(currentPage);
        //执行查询方法
        this.getProductList(null,currentPage)
    }

    //上一页事件
    prePageHandeler() {
        let {pageNum} = this.state;
        if (--pageNum === 0) {
            return false
        }
        this.pageClick(pageNum)
    }

    //下一页事件
    nextPageHandeler() {
        let {pageNum,totalPage} = this.state;
        if (++pageNum > totalPage) {
            return false
        }
        this.pageClick(pageNum)
    }

    getProductDesc =(a,b) => {
    }
    
    //  退出该组件时执行
    componentWillUnmount() {
        const _this = this;
        console.log(_this.state);
    }

    render() {
        const imgurl = require("./imgs/1.jpg");
        const pageList = this.createPage();
        return (
            <div>
                <div className="product-type">
                    <ul>
                        {
                            this.state.producttypes.map(item => 
                                <li key={item.typeno} onClick={this.getProductList.bind(this,item.typeno,null)}>
                                    <span>{item.typename}</span>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className="product-list">
                    <div className="pro-item">
                        <ul>
                            {
                                this.state.products.map(item =>     /* 循环输出 */
                                    <li key={item.productno}>
                                        <Link to={
                                            {
                                                pathname:"/ProductInfo",
                                                state:{productid:item.productno}
                                            }
                                            }>
                                            <div className="pro-img">
                                                <img src={imgurl} alt="产品照片"/>   
                                            </div>
                                            <h4>{item.productname}</h4>
                                            <span>{item.productdesc}</span>
                                        </Link>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <div className="pro-page">
                        <ul className="page-container">
                            {pageList}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;