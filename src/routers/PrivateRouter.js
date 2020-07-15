import React from 'react';
import {Route,Redirect} from "react-router-dom";

//通过映射到props上,拿到自己想要的参数

//高阶组件(mapStateToProps)

//组件开头必大写
function PrivateRouter({isLogin,component: Component,...restProps}) {
        // 为什么使用route,可以接受component,children,render,判断是够登录，从而渲染对应的组件
        // restProp：history,location,match
        // redirect 重定向组件
    return <Route {...restProps} render={props=>isLogin? <Component {...props} />
    :<Redirect to={{pathname:"/login" ,
            state: {redirect:props.location.pathname}}} />}/>
}

export default PrivateRouter;
