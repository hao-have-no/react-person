import React, {Component} from 'react';
import {RouterContext} from "./Context";
import {matchPath} from "react-router-dom";

//组件复合

class Switch extends Component {

    render() {
        //可以使用Consumer 共享状态
         return (
            <RouterContext.Consumer>
                {
                    context=>{

                        const {location} = context.history;

                        let match; //找到匹配的元素标识
                        let element;//匹配的元素

                        const { children } = this.props;//children需要专门处理，因为children的形式不唯一

                        // todo 查找逻辑
                        //  React.Children用法,children是数据源
                        React.Children.forEach(children,child=>{
                            //不需要终止，match匹配到之后，后续的操作都不会执行
                            if (match == null && React.isValidElement(child)){

                                element = child;

                                //是否匹配
                                const {path} = child.props;

                                //匹配path元素和参数内容
                                match = path ? matchPath(location.pathname,child.props):context.match;
                            }
                        })

                        //匹配了以后，之后的route可以继续复用
                        //cloneElement复制一个节点，并且通过第二个参数props从而覆盖之前的值,完成传递
                        return match ? React.cloneElement(element,{
                            //匹配的话，继续往下面传match
                            computedMatch:match
                        }):null;
                    }
                }
            </RouterContext.Consumer>
         )
    }
}

export default Switch;
