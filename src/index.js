// import React from 'react';
// import ReactDOM from 'react-dom';
// // import './index.css';
// import App from './App';
// // import "./static/iconfont/iconfont.css"
// // // import {Provider} from 'react-redux'
// import Provider from './components/ReactRedux/'
// import store from './store/hookStore'
// // import * as serviceWorker from './serviceWorker';
//
// //Jsx需要babel loader 转义
//
// //把组件生成的真实dom挂载到root上
//
//Provider 借助　context　跨平台通信原则　对子组件进行传值
//所有的子组件都可以接受到store
// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//   document.getElementById('root')
// );
//
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// // serviceWorker.unregister();


//20200706-企业级开发实战(路由守卫,dva,umi)
import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store/user";
import {Provider} from "react-redux";

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

// redux 存储store state
// react-redux 传递store state，原理是context以及hoc
// react-router  管理路由




//20200711 -- 手写react
// import React, {Component} from 'react';
// import ReactDom from 'react-dom';

// import React from './components/kreact/index';
// import ReactDom from './components/kreact/react-dom';
// import Component from './components/kreact/Component'
// import "./index.css"
//
// function FunctionComponent(props){
//     return <div className="border">FunctionComponent-{props.name}</div>
// }
//
// class ClassComponent extends Component{
//     static defaultProps = {
//         color: "pink"
//     };
//
//     render(){
//        return (
//            <div className="border">
//                FunctionComponent-{this.props.name}
//                <p className={this.props.color}>color</p>
//                </div>
//     )
//    }
// }
//
// const jsx = (
//     <div>
//         <p className="title">亚速尔群岛</p>
//         <a>123523</a>
//         <FunctionComponent name="func"/>
//         <ClassComponent name="class" />
//         {/*/!*数组类的循环遍历处理,在遍历子节点的时候处理*!/*/}
//         {/*{*/}
//             {/*[1,2].map(item=>(*/}
//                 {/*<div key={item}>{item}</div>*/}
//             {/*))*/}
//         {/*}*/}
//     </div>
// )
//
// //cra的框架（脚手架）自带jsx处理
// //jsx会被babel-loader预编译JSX为React.createElement(...)，所以会自动调用react中的createElement方法
//
// ReactDom.render(jsx,document.getElementById('root'));
