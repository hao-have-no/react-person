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
// import React from "react";
// import ReactDom from "react-dom";
// import "./index.css";
// import App from "./App";
// import store from "./store/user";
// import {Provider} from "react-redux";
//
// ReactDom.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById("root")
// );

// redux 存储store state
// react-redux 传递store state，原理是context以及hoc
// react-router  管理路由




//20200711 -- 手写react
import React from './components/kreact/index';
import ReactDom,{useState} from './components/kreact/react-dom';
import Component from './components/kreact/Component'
import "./index.css"


function FunctionComponent(props){

    //20200715 函数组件使用hooks

    const [count,setCount] = useState(2);//useState返回一个数组，一个是state,另外一个是执行参数

    return <div className="border">
        FunctionComponent-{props.name}
        <button onClick={()=>{
            console.log('count');
            setCount(count+1);
        }}>{count}</button>
        {/*模拟updateNode*/}
        {count % 2 ? <button>click</button>:<div>omg</div>}
    </div>
}

// class ClassComponent extends Component{
//     static defaultProps = {
//         color: "pink"
//     };
//
//     render(){
//         return (
//             <div className="border">
//                 FunctionComponent-{this.props.name}
//                 <p className={this.props.color}>color</p>
//             </div>
//         )
//     }
// }

const jsx = (
    <div>
        <p className="title">埃塞俄比亚</p>
        <a>123523</a>
        <FunctionComponent name="func"/>
        {/*<ClassComponent name="class" />*/}
        {/*/!*数组类的循环遍历处理,在遍历子节点的时候处理*!/*/}
        {/*{*/}
        {/*[1,2].map(item=>(*/}
        {/*<div key={item}>{item}</div>*/}
        {/*))*/}
        {/*}*/}
    </div>
)

//cra的框架（脚手架）自带jsx处理
//jsx会被babel-loader预编译JSX为React.createElement(...)，所以会自动调用react中的createElement方法

ReactDom.render(jsx,document.getElementById('root'));



//使用useCallBack实现值的缓存，类似vue的compute

// import * as React from "react";
// import {useState, useCallback, PureComponent} from "react";
// // import React,{Component,useState} from 'react'
// import ReactDom from 'react-dom'
//
//
// class Child extends PureComponent {
//     render() {
//         console.log("child render");
//         const {addClick} = this.props;
//         return (
//             <div>
//                 <h3>Child</h3>
//                 <button onClick={() => console.log(addClick())}>add</button>
//             </div>
//         );
//     }
// }
//
// export default function UseCallbackPage(props) {
//     const [count, setCount] = useState(0);
//
//     const addClick = useCallback(() => {
//         let sum = 0;
//         for (let i = 0; i < count; i++) {
//             sum += i;
//         }
//         return sum;
//     },[count]);
//
//     const [value, setValue] = useState("");
//     return (
//         <div>
//             <h3>UseCallbackPage</h3>
//             <p>{count}</p>
//             <button onClick={() => setCount(count + 1)}>add</button>
//             <input value={value} onChange={event => setValue(event.target.value)} />
//             <Child addClick={addClick} />
//         </div>
//     );
// }

//使用useMemo完成方法的缓存

// import * as React from "react";
// import {useState, useMemo} from "react";
// import ReactDom from 'react-dom'
//
//
// export default function UseMemoPage(props) {
//     const [count, setCount] = useState(0);
//     const [value, setValue] = useState("");
//
//     const expensive = useMemo(() => {
//         console.log("compute");
//         let sum = 0;
//         for (let i = 0; i < count; i++) {
//             sum += i;
//         }
//         return sum;
//     },[count]);
//
//     return (
//         <div>
//             <h3>UseMemoPage</h3>
//             <p>expensive:{expensive}</p>
//             <p>{count}</p>
//             <button onClick={() => setCount(count + 1)}>add</button>
//             <input value={value} onChange={event => setValue(event.target.value)} />
//         </div>
//     );
// }
//
//
//
//
// const jsx = (
//     <div>
//         <p className="title">马德拉群岛</p>
//         <a>123523</a>
//         <UseMemoPage/>
//         {/*<FunctionComponent name="func"/>*/}
//         {/*<ClassComponent name="class" />*/}
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





