import React, {useState} from 'react';
// import IndexPage from "./pages/IndexPage";
// import BottomNav from "./components/BottomNav";
// import CartPage from "./pages/CartPage";
// import OrderListPage from "./pages/OrderListPage";
// import UserPage from "./pages/UserPage";
// import ContextPage from "./pages/ContextPage/ContextPage";
// import "antd/dist/antd.css"
// import AntdFormPage from "./pages/AntdFormPage/AntdFormPage";
// import MyRCFieldForm from "./pages/ContextPage/MyRCFieldForm";
// import MyRcForm from "./pages/ContextPage/MyRcForm";
// import DialogPage from "./pages/ContextPage/DialogPage";
// import ReduxPage from "./pages/ReduxPage";
// import ReactReduxPage from "./pages/ReactReduxPage";
// import HooksPage from "./pages/ReactReduxPage/HooksPage";

// import { BrowserRouter as Router , Route, Link, Switch,useRouteMatch, useHistory, useLocation, useParams} from './components/ReactRouter/index';
// import { BrowserRouter as Router , Route, Link, Switch, useRouteMatch} from 'react-router-dom'
// import Welcome from "./pages/ReactRouterPage";
// import PageThree from "./pages/ReactRouterPage/test3";
// import PageTwo from "./pages/ReactRouterPage/test2";
// import PageOne from "./pages/ReactRouterPage/test1";
// import _404Page from "./pages/ReactRouterPage/_404Page";
// import Routes from "./routers";

function App() {
    // const [activeNum,setActiveNum] = useState(0);
    // const [state,setState] = useState(0);
    //useState:react hook提供的方法，用于修改指定的值(activeNum)

  return (
    <div className="App">
        {/*<p>{state}</p>*/}
        {/*<button onClick={()=>setState(state+1)}>add</button>*/}
        {/*{activeNum === 0 && <IndexPage/>}*/}
        {/*{activeNum === 1 && <CartPage/>}*/}
        {/*{activeNum === 2 && <OrderListPage/>}*/}
        {/*{activeNum === 3 && <UserPage/>}*/}
        {/*<BottomNav activeNum={activeNum} setActiveNum={setActiveNum}/>*/}
        {/*<ContextPage/>*/}

        {/*手写组件*/}
        {/*<AntdFormPage/>*/}
        {/*<MyRCFieldForm/>*/}
        {/*<MyRcForm/>*/}
        {/*<DialogPage/>*/}

        {/*手写Redux*/}
        {/*<ReduxPage/>*/}

        {/*手写react-redux*/}
        {/*<ReactReduxPage/>*/}
        {/*<HooksPage/>*/}

        {/*手写react-router*/}
        {/*<Router>*/}
            {/*<Link to="/">首页--》</Link>*/}
            {/*<Link to="/user">用户--》</Link>*/}
            {/*<Link to="/page">页面二--》</Link>*/}
            {/*<Link to="/login">登录--》</Link>*/}
            {/*<Link to="/produce/1">商品--》</Link>*/}
            {/*/!*动态路由也是走match匹配渲染的*!/*/}

            {/*/!*exact 用于精确匹配*/}
            {/*/!*switch 独占路由匹配，匹配到了就不会往下匹配了*!/*/}
            {/*/!*Route渲染优先级：children>component>render。*!/*/}
            {/*/!*children 主要用于每个页面都要有的显示内容,比如手机端的底部导航条*!/*/}

            {/*/!*渲染component的时候会调⽤React.createElement，如果使⽤下⾯这种匿名函数的*!/*/}
            {/*/!*形式，每次都会⽣成⼀个新的匿名的函数*!/*/}

            {/*/!* 错误举例 课下⾃⼰尝试下 观察下child的didMount和willUnmount函数 *!/*/}
            {/*/!* <Route component={() => <Child count={count} />} /> *!/*/}
            {/*/!*因为会频繁的装载卸载组件*!/*/}

            {/*/!* 下⾯才是正确的示范，render只有匹配上了才回去渲染组件*!/*/}
            {/*/!* <Route render={() => <Child count={count} />} /> *!/*/}

            {/*/!* children 呢 ,children 本质是 function ，组件复合的话可以是单个对象或者是list数组*!/*/}
            {/*/!* <Route children={() => <Child count={count} />} /> *!/*/}

            {/*<Switch>*/}
                {/*<Route exact path="/" component={Welcome}/>*/}
                {/*<Route path="/user" component={PageOne}/>*/}
                {/*<Route path="/page" component={PageTwo}/>*/}
                {/*<Route path="/login" component={PageThree}/>*/}
                {/*/!*<Route path="/produce/:id" component={Product}/>*!/*/}
                {/*/!*<Route path="/produce/:id" render={(props)=><Product {...props}/> }/>*!/*/}

                {/*/!*假设传值，而是通过上下文的关系去拿值*!/*/}
                {/*<Route path="/produce/:id" render={()=><Product /> }/>*/}
                {/*<Route component={_404Page} />*/}
            {/*</Switch>*/}
        {/*</Router>*/}

        {/*企业级开发最佳实践*/}
        {/*Generate实践 helloGenerate*/}
         {/*<Routes />*/}
    </div>
  );
}
//函数式组件，可以使用hooks的方式，搭配context完成上下级的关系嵌套
//类组件的话，想获取相关的上下文属性，需要借助withoutRouter(装饰器)
// function Product(props){
//     // const {match} = props;
//
//     //使用hooks方法获取match
//     //使用这个钩子函数可以让你匹配最接近route树的路由
//     const match = useRouteMatch();
//     const history = useHistory();
//     const location = useLocation();
//     const _params = useParams();
//
//     console.log('match',match,history,location,_params);
//
//
//     const {params,url} = match;
//     const {id} = params;
//     return <div>
//         product:{id}
//         <Link to={`${url}/detail`}>详情</Link>
//         <Route path={`${url}/detail`} component={Detail}></Route>
//         </div>
// }
//
// function Detail(){
//     return <div>
//         <h3>Detail</h3>
//     </div>
// }

{/*Generate实践*/}
function* helloGenerate(){
    yield 'hello';
    yield 'world';
    yield 'name';
}

let hw = helloGenerate();

// console.log(hw);
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());

//惰性求知
var a = 0;
function* fun() {
    let aa = yield (a = 1+ 1);
    return aa;
}

console.log('fun0',a);
let b = fun();
console.log('fun1',a);
b.next();
console.log('fun2',a);

//generate:返回的是一个遍历器对象
// 调用next，才会遍历下一个状态
// value 表示当前的内部状态，done表示遍历是否结束



export default App;
