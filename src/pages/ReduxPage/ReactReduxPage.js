import React, {Component} from 'react';
import {connect} from "react-redux";

//高阶组件
export default connect(

    //mapStateToProps 把state 映射到 props

    state=>({
        num:state
    }),

    //mapDispatchToProps 把dispatch 映射到 props
    //将素有的dispatch里的方法全部映射到props中
    {
        add:()=>({
            type:'ADD'
        })
    }

)(
class ReactReduxPage extends Component {
        render() {
            console.log('react redux props',this.props);
            const {num, dispatch,add} = this.props;
            return (
                <div>
                    <h3>ReactReduxPage</h3>
                    <p>数量:{num}</p>
                    {/*<button onClick={{type:'ADD'}}>add</button>*/}
                    <button onClick={add}>add</button>
                </div>
            );
        }
    });
