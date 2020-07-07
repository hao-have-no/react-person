import React, {Component} from 'react';
import {RouterContext} from './Context'

//由于browerser组件引用了router ,　通过 props 拿到传递的值
class Router extends Component {

    static computeRootMatch(pathname) {
        //封装枚举对象
        return {path: "/", url: "/", params: {}, isExact: pathname === "/"};
    }


    //实现监听
    //location的变化可以更新组件
    constructor(props){
        super(props);
        this.state = {
            location:props.history.location
        };

        //类似subscribe
        props.history.listen(location=>{
            console.log('update',location);
            //通过setState,改变值，从而更新组件
            this.setState({location});
        })

    }

    render() {
        const {history,children} = this.props;
        return <RouterContext.Provider
            value={{
                //提供基础的属性
                history,
                location: this.state.location,
                match: Router.computeRootMatch(this.state.location.pathname)
            }}>{children}</RouterContext.Provider>;
    }
}

export default Router;
