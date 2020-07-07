import React, {Component} from 'react';
import {RouterContext} from "./Context";

class Link extends Component {
    // class 只能使用 contextType
    static contextType = RouterContext;


    handlClick=e=>{
        //禁止a的默认事件，避免页面闪烁
        e.preventDefault();

        //命令式修改路由
        //history
        //history.push(this.props.to);

        this.context.history.push(this.props.to);
    }


    render() {
        const {to,children, ...restProps} = this.props;
        //chilren 就是link标签中的值
        // console.log(to,'***'+children,restProps);

        return (
            <div>
               {/*<h3>Link</h3>*/}
                <a href={to} {...restProps} onClick={this.handlClick}>
                    {children}
                    {/*children 我们即将渲染的component*/}
                </a>
            </div>
        );
    }
}

export default Link;
