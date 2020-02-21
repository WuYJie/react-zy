/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
//import logo from './zyinno.png';
import './home.css';
import axios from 'axios';

//定义一个React组件
class ZYHome extends Component {

  constructor(props){
    super(props);
    this.state={
      users:[],
      userName:'2112'
    }
  }

  getUserName() {
    const _this = this; //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
    axios.get('http://127.0.0.1:8080/getUserName')
    .then(function (response) {
      console.log(response.data);
      _this.setState({
        userName:response.data,
        users:response.data,
      });
    })
    .catch(function (error) {
      console.log(error);
      _this.setState({
        error:error
      })
    })
  }

  render() {  //React组件中必须有一个render函数
    return (
      <div>
        <div className="ZY-div3">
          <div>深圳市智宇创新科技有限公司</div>
          <button onClick={this.getUserName.bind(this)}>
            请求方法
          </button>
          {this.state.userName}
        </div>
      </div>
    );
  }
}

export default ZYHome; //组件定义好之后，导出了在别的地方才能引用
