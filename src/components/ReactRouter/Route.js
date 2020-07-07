import React, {Component} from 'react';
import {RouterContext} from "./Context";
import {matchPath} from "react-router-dom";


class Route extends Component {
    render() {
        //根据location,来匹配传入的patch,从而渲染component
        // const {path,component} = this.props;
        //匹配
        // const match = window.location.pathname === path;

        //component并不是个组件，无法直接使用，需要进行再一步的封装
        //通过createElement 封装

        //由于下面的子组件可能用到顶级的一些东西，所以使用context,跨层级通信
        return (
            <RouterContext.Consumer>
                {
                    context => {
                        const {location} = context.history;
                        //来自于调用时的传参
                        const {path, component,children, render} = this.props;

                        //match如果没有默认值的话，默认是匹配的，那么错误的路由下404页面就匹配不上，无法显示
                        console.log('location',location, this.props,context);

                        const match = path
                                ? matchPath(location.pathname, this.props)
                                : context.match;

                        //match children, component render|null
                        //不match children function | null


                        // const match = location.pathname === path;//比对路由

                        // return match?React.createElement(component):null;
                        //手写route

                        //接受的参数
                        const props = {
                            ...context,
                            location,
                            match
                        }


                        console.log('match',match);

                        return match ?
                            children ? typeof children === 'function'
                                            ? (children(props))
                                            : (children)
                                    : component
                                            //组件渲染，并且传入参数，保证参数不丢失
                                            ? (React.createElement(component, props))
                                            : (render ? render(props) : null)
                            :
                            typeof children === 'function' ? children() : null
                    }
                }
            </RouterContext.Consumer>
        )
        // match?React.createElement(component):null;
    }
}

export default Route;
