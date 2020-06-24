import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./static/iconfont/iconfont.css"
// import * as serviceWorker from './serviceWorker';

//Jsx需要babel loader 转义

//把组件生成的真实dom挂载到root上
ReactDOM.render(
    <App />,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
