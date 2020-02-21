//项目的入口
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//React组件，大写字母开头
import ZYHome from './ZYHome';
import Top from './zyhome/main/top';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Top />, document.getElementById('top'));  //作用是将Top组件渲染到top标签
ReactDOM.render(<ZYHome />, document.getElementById('root'));  //作用是将ZYHome组件渲染到root标签

serviceWorker.unregister();