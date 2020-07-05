import React, {Component} from 'react';
// import {connect} from "react-redux";
import {bindActionCreators,connect} from "../../components/ReactRedux/index";
// import connect from "../../components/ReactRedux/index";

//connect需要搭配　react-redux的provider  ,提供与接收
class ReactReduxPage extends Component{
    render(){
        console.log('props',this.props);
        //需要将映射到props结构出来
        const {count,dispatch,add,minus} = this.props;

        return (
            <div>
                <h3>ReactReduxPage</h3>
                <p>{count}</p>
                <button onClick={()=>{
                    dispatch({type:'ADD'})
                }}>add</button>
                <button onClick={add}>add</button>
                <button onClick={minus}>minus</button>
            </div>
        );
    }
}


//没有配装饰器的话，想用高阶组件的话
// 通过connect方法子组件可以获取store中的state和dispatch。
export default connect(
    //可接受两个参数  mapStateToProps，mapDispatchToProps(object||function) 映射state到props


    //由于store中声明了combineReducers复合规则，传入的值是个对象
    //取到content中的count并返回count  复制一份在当前props上

    ({count})=>({count}),//mapStateToProps

    //相当于 state=>{ return {count:state.count} }
    //箭头函数解构赋值

    //mapDispatchToProps,add就直接发的是dispatch请求
    // {
    //     add: () => ({type: 'ADD'}),
    //     minus: () => ({type: 'MINUS'}),
    // }


        //可以调用dispatch，也可以调用映射到props的add方法
       // dispatch => {
       //      let creates={
       //          add: () => dispatch({type: 'ADD'}),
       //          minus: () => dispatch({type: 'MINUS'}),
       //      };
       //
       //      return {dispatch,...creates}
       //  }

        //避免手动便利上诉的dispatch
        //另外dispatch有同级参数
    (dispatch,ownProps)=>{
        //ownProps
        //会导致每次组件内的state改变都会重新执行这个方法,不加就ok

        //每个组件内有原有属于自己的props属性
        console.log('ownProps',ownProps);
            //actions集合
            let creates={
                 add: () => ({type: 'ADD',payload:100}),
                 minus: () => ({type: 'MINUS'}),
             };

            //创建actions对象
            //是将一个或多个action和dispatch组合起来生成mapDispatchToProps需要生成的内容。
            creates = bindActionCreators(creates,dispatch);

            return {dispatch,...creates}
        },

        // (stateProps,dispatchProps,ownProps)=>{
        //     return {
        //         ...stateProps,...dispatchProps,...ownProps,omg:'omg'
        //     }
        // }

        //connect的三个api使用



)(ReactReduxPage)

// export default ReactReduxPage;
