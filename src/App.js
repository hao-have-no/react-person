import React, {useState} from 'react';
import IndexPage from "./pages/IndexPage";
import BottomNav from "./components/BottomNav";
import CartPage from "./pages/CartPage";
import OrderListPage from "./pages/OrderListPage";
import UserPage from "./pages/UserPage";
import ContextPage from "./pages/ContextPage/ContextPage";
// import "antd/dist/antd.css"
import AntdFormPage from "./pages/AntdFormPage/AntdFormPage";
import MyRCFieldForm from "./pages/ContextPage/MyRCFieldForm";
import MyRcForm from "./pages/ContextPage/MyRcForm";
import DialogPage from "./pages/ContextPage/DialogPage";
// import ReduxPage from "./pages/ReduxPage";
import ReactReduxPage from "./pages/ReactReduxPage";
// import HooksPage from "./pages/ReactReduxPage/HooksPage";

import { BrowserRouter as Router , Route,Link,
    // Switch
} from './components/ReactRouter/';
import Welcome from "./pages/ReactRouterPage";
import PageThree from "./pages/ReactRouterPage/test3";
import PageTwo from "./pages/ReactRouterPage/test2";
import PageOne from "./pages/ReactRouterPage/test1";
import _404Page from "./pages/ReactRouterPage/_404Page";

function App() {
    // const [activeNum,setActiveNum] = useState(0);
    //useState:react hook提供的方法，用于修改指定的值(activeNum)

  return (
    <div className="App">
        {/*{activeNum === 0 && <IndexPage/>}*/}
        {/*{activeNum === 1 && <CartPage/>}*/}
        {/*{activeNum === 2 && <OrderListPage/>}*/}
        {/*{activeNum === 3 && <UserPage/>}*/}
        {/*<BottomNav activeNum={activeNum} setActiveNum={setActiveNum}/>*/}
        {/*<ContextPage/>*/}
        {/*<AntdFormPage/>*/}
        {/*<MyRCFieldForm/>*/}
        {/*<MyRcForm/>*/}
        {/*<DialogPage/>*/}
        {/*<ReduxPage/>*/}
        {/*<ReactReduxPage/>*/}
        {/*<HooksPage/>*/}

        <Router>
            <Link to="/">首页--》</Link>
            <Link to="/user">用户--》</Link>
            <Link to="/page">页面二--》</Link>
            <Link to="/login">登录--》</Link>

            {/*//exact 用于精确匹配*/}
            {/*switch 独占路由匹配，匹配到了就不会往下匹配了*/}
            {/*Route渲染优先级：children>component>render。*/}
            {/*children 主要用于每个页面都要有的显示内容,比如手机端的底部导航条*/}

            {/*渲染component的时候会调⽤React.createElement，如果使⽤下⾯这种匿名函数的*/}
            {/*形式，每次都会⽣成⼀个新的匿名的函数*/}

            {/* 错误举例 课下⾃⼰尝试下 观察下child的didMount和willUnmount函数 */}
            {/* <Route component={() => <Child count={count} />} /> */}
            {/*因为会频繁的装载卸载组件*/}

            {/* 下⾯才是正确的示范，render只有匹配上了才回去渲染组件*/}
            {/* <Route render={() => <Child count={count} />} /> */}

            {/* children 呢 ,children 本质是 function ，组件复合的话可以是单个对象或者是list数组*/}
            {/* <Route children={() => <Child count={count} />} /> */}

            {/*<Switch>*/}
                <Route exact path="/" component={Welcome}/>
                <Route path="/user" component={PageOne}/>
                <Route path="/page" component={PageTwo}/>
                <Route path="/login" component={PageThree}/>
                <Route path="/produce/:id" component={Product}/>
                <Route component={_404Page} />
            {/*</Switch>*/}
        </Router>
    </div>
  );
}

function Product(props){
    const {match} = props;
    const {params,url} = match;
    const {id} = params;
    return <div>
        product:{id}
        <Link to={`${url}/detail`}>详情</Link>
        <Route path={`${url}/detail`} component={Detail}></Route>
        </div>
}

function Detail(){
    return <div>
        <h3>Detail</h3>
    </div>
}

export default App;
