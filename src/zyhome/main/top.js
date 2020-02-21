import React, { Component } from 'react';
import { HashRouter as Router,Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Home from './home';
import logo from '../../zyinno.png';

import Aboutzy from '../aboutzy/aboutzy';
import Product from '../product/product';
import ProductInfo from '../product/productinfo';

//定义一个React组件
class Top extends Component {

  constructor(props){
    super(props);
    this.state={
      users:[],
      isLoaded:false,
      userName:''
    }
  }

  render() {  //React组件中必须有一个render函数
    return (
      <div>
        <Router>
        <div className="ZY-top">
        <Link to="/" target="_self" title="智宇创新"><img src={logo} className="ZY-logo" alt="logo" /></Link>
          <ul>
            <li>
              <Link to="/Aboutzy" target="_self" title="关于智宇">关于智宇</Link>
            </li>
            {/* <li>
              <Link to="/ProductInfo" target="_self" title="智宇未来">智宇未来</Link>
            </li> */}
            <li>
              <Link to="/Product" target="_self" title="产品介绍">产品介绍</Link>
            </li>
            <li>
              <a href="https://zhiyucx.1688.com/?spm=a262hi.b0001cp.0.0.4bfd4402qRMtc5"  title="智宇商城">智宇商城</a>
            </li>
            <li>
              <Link to="/" target="_self" title="联系我们">联系我们</Link>
            </li>
          </ul>
        </div>
        <div className="ZY-div2">
          <Route exact path="/" component={Home}></Route>  {/* exact是为了访问其他页面是，不再渲染当前页面 */}
          <Route path="/Aboutzy" component={Aboutzy}></Route>
          <Route path="/Product" component={Product}></Route>
          <Route path="/ProductInfo" component={ProductInfo}></Route>
        </div>
        </Router>
        </div>
    );}
}

export default Top;