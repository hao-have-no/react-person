import ReactDOM from 'react-dom/client';
import React from "react";
// import Context from "./context";
// import Article from "./Articles/index"
// import Lifes from "./LifeHook/life"
// import Example from './HooksTest/index'
import {Routes,Route} from "react-router-dom";

import { AuthRoute } from '@/components/AuthRoute'
import './index.scss' //引入全局的scss
// 导入antd样式文件
import 'antd/dist/antd.min.css'

import { HistoryRouter, history } from '@/utils/history'

// 代码分割 按需导入
import { lazy, Suspense } from 'react'
const Layout = lazy(() => import ('@/pages/Layout'))
const Login = lazy(() =>import ('@/pages/Login'))
const Home = lazy(() =>import ("@/pages/Home"))
const Articles = lazy(() =>import ("@/pages/Articles"))
const Publish = lazy(() =>import ("@/pages/Publish"))

const root = ReactDOM.createRoot(document.getElementById('root'));
// const name = 'Hello111, world!';
//
// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
// }
//
// const user = {
//     firstName: 'Harper',
//     lastName: 'Perez'
// };
//
//
// // 创建有状态的组件
// // 将 JSX 所接收的属性（attributes）以及子组件（children）转换为单个对象传递给组件，这个对象被称之为 “props”
// // 所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。
// // 纯函数
// // function sum(a, b) {
// //     return a + b;
// // }
//
// class Welcome extends React.Component{
//     render() {
//         return (
//             <h2>hello world every body</h2>
//         );
//     }
// }
//
// // 通过state 维护可变的数据,帮助ui实时发生变化
//
// // state 作为 下个组件的 prop
// // 函数组件
// function FormattedDate(props) {
//     return <h2>
//         It is new {props.date.toLocaleTimeString()}.
//     </h2>;
// }
//
// class Clock extends React.Component{
//     // 将 props 传递到父类的构造函数中
//     constructor(props){
//         super(props);
//         this.state = {
//             date:new Date(),
//             counter:0,
//             state:0
//         }
//     }
//
//     tick() {
//         // 通过更改state 触发render函数 重渲染
//         // 通过构造函数 setState 才能修改state状态 其他的都不行
//         // state更新 是异步的  可以将多个state 的更新合并到一起
//         this.setState({
//             date: new Date(),
//             counter: Math.floor(Math.random()*1000)
//         });
//
//         this.setState((state,props)=>({
//             total: state.counter + props.count,
//         }))
//     }
//
//     //通过生命周期来进行操作
//     // 挂载
//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(),
//             1000
//         );
//     }
//
//     // 卸载
//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }
//
//     handleClick(){
//         console.log('this is:', this);
//     }
//
//     render() {
//         return(
//             <div>
//                 <h1>Hello, world!</h1>
//                 <button onClick={()=> this.handleClick()}>点击</button>
//                 <h3>total:{this.state.total}</h3>
//                 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//                 <FormattedDate date={this.state.date}/>
//             </div>
//         )
//     }
// }
//
// // 条件判断
// function Greeting(props){
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn){
//         return <span>ON</span>
//     }else{
//         return <span>OFF</span>
//     }
// }
//
// // 有状态的判断
// function LoginButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Login
//         </button>
//     );
// }
//
// function LogoutButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Logout
//         </button>
//     );
// }
//
// class LoginControl extends React.Component{
//     constructor(props){
//         super(props);
//         // 在 JavaScript 中，class 的方法默认不会绑定 this。
//         // 如果你忘记绑定 this.handleClick 并把它传入了 onClick，
//         // 当你调用这个函数的时候 this 的值为 undefined。
//         // 在调用时可以使用箭头函数 来规避这种写法
//         // this.handleLoginClick = this.handleLoginClick.bind(this);
//         // this.handleLogoutClick = this.handleLogoutClick.bind(this);
//         this.state = {isLoggedIn: false};
//     }
//
//     handleLoginClick=()=>{
//         this.setState({isLoggedIn: true});
//     }
//
//     handleLogoutClick=()=>{
//         this.setState({isLoggedIn: false});
//     }
//
//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
//         let button;
//         if (isLoggedIn) {
//             button = <LogoutButton onClick={this.handleLogoutClick} />;
//         } else {
//             button = <LoginButton onClick={this.handleLoginClick} />;
//         }
//         return(
//             <div>
//                 <Greeting isLoggedIn={isLoggedIn} />
//                 {button}
//                 {
//                     isLoggedIn?
//                         <span> this is button status on</span>
//                         :
//                         <span> this is button status off</span>
//                 }
//             </div>
//         )
//     }
// }
//
// // 列表操作
// function TodoList(){
//     const numbers = [1, 2, 3, 4, 5];
//     // const listItems = numbers.map((number) =>
//     //     <li key={number.toString()}>{number*2}</li>
//     // );
//     // return <ul>{listItems}</ul>
//     return <ul>
//         {
//             numbers.map((number) =>
//                 <li key={number.toString()}>{number*2}</li>
//             )
//         }
//     </ul>
// }
//
//
// // 状态提升 共享状态放在父组件里
// const scaleNames = {
//     c: 'Celsius',
//     f: 'Fahrenheit'
// };
//
// class TemperatureInput extends React.Component {
//     constructor(props) {
//         super(props);
//         // this.handleChange = this.handleChange.bind(this);
//     }
//
//     handleChange=(e)=> {
//         this.props.onTemperatureChange(e.target.value);
//     }
//
//     render() {
//         const temperature = this.props.temperature;
//         const scale = this.props.scale;
//         return (
//             <fieldset>
//                 <legend>Enter temperature in {scaleNames[scale]}:</legend>
//                 <input value={temperature}
//                        onChange={this.handleChange} />
//             </fieldset>
//         );
//     }
// }
//
//
// function tryConvert(temperature, convert) {
//     const input = parseFloat(temperature);
//     if (Number.isNaN(input)) {
//         return '';
//     }
//     const output = convert(input);
//     const rounded = Math.round(output * 1000) / 1000;
//     return rounded.toString();
// }
//
// function toCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9;
// }
//
// function toFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32;
// }
//
// function BoilingVerdict(props) {
//     if (props.celsius >= 100) {
//         return <p>The water would boil.</p>;
//     }
//     return <p>The water would not boil.</p>;
// }
//
// class Calculator extends React.Component {
//     constructor(props) {
//         super(props);
//         // this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//         // this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//         this.state = {temperature: '', scale: 'c'};
//     }
//
//     handleCelsiusChange=(temperature)=> {
//         console.log('update');
//         this.setState({scale: 'c', temperature});
//     }
//
//     handleFahrenheitChange=(temperature)=> {
//         this.setState({scale: 'f', temperature});
//     }
//
//     render() {
//         const scale = this.state.scale;
//         const temperature = this.state.temperature;
//         const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//         const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
//         console.log('celsius',celsius)
//         return (
//             <div>
//                 <TemperatureInput
//                     scale="c"
//                     temperature={celsius}
//                     onTemperatureChange={this.handleCelsiusChange} />
//                 <TemperatureInput
//                     scale="f"
//                     temperature={fahrenheit}
//                     onTemperatureChange={this.handleFahrenheitChange} />
//                 <BoilingVerdict
//                     celsius={parseFloat(celsius)} />
//             </div>
//         );
//     }
// }
//
//
// // 组合和继承
//
// // 有些组件无法提前知晓它们子组件的具体内容
// function SplitPane(props) {
//     return (
//         <div>
//             <div>
//                 {props.left}
//             </div>
//             <div>
//                 {props.right}
//             </div>
//         </div>
//     );
// }
//
// function Contacts(){
//     return <div>Contacts</div>
// }
// function Chat(){
//     return <div>Chat</div>
// }
//
// function App() {
//     return (
//         <SplitPane
//             left={
//                 <Contacts />
//             }
//             right={
//                 <Chat />
//             } />
//     );
// }

const element =
    <HistoryRouter history={history}>
        <Suspense
            fallback={
                <div style={{
                    height: '100vh'
                }}>
                </div>
            }>
            {/* demo 请复制  text文件里内容 */}
            {/*进行路由配置*/}
            <Routes>
                {/*创建路由对应关系*/}
                {/*<Route path='/' element={<Layout/>}></Route>*/}
                {/*<Route path='/login' element={<Login/>}></Route>*/}
                {/*使用鉴权高阶组件*/}
                <Route path="/*" element={
                    <AuthRoute>
                        <Layout />
                    </AuthRoute>
                }>
                    <Route index element={<Home />} />
                    <Route path="article" element={<Articles />} />
                    <Route path="publish" element={<Publish />} />
                </Route>
                <Route path='/login' element={<Login />} />
            </Routes>
        </Suspense>
    </HistoryRouter>;

root.render(element);
