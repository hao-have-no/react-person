import React,{useContext,useReducer,useLayoutEffect} from 'react';

//使用context 实现跨层级
const context = React.createContext();


//手写connect，进行props上的映射
export const connect= (mapStateToProps = state => state,mapDispatchToProps)=>WrappedComponent=> props=>{

    //todo 获取state
    const store = useContext(context)

    //这三个也是store暴露出来的三个参数
    const {getState,dispatch,subscribe} = store;



    //将当前的state,映射到props上一份
    const stateProps = mapStateToProps(getState());

    let dispatchProps = {dispatch};

    //在dispatch触发更新后，怎么渲染页面
    //hooks:自定义subscript,从而执行forceUpdate

    const [_,forceUpdate] = useReducer(x=>x+1,0); //通过改变state的值，触发组件的更新

    //useReducer 补充
    //const [state, dispatch] = useReducer(reducer, initialArg, init);
    // 它接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法。

    //实现mapDispatchToProps:参数需要用dispatch包括一层,出发函数时，直接dispatch(action)，触发更新

    console.log('dispatch',dispatch,mapDispatchToProps);

    if (typeof mapDispatchToProps === 'function'){
        //直接执行就行
        dispatchProps = mapDispatchToProps(dispatch);
    }else if (typeof mapDispatchToProps === 'object'){
        // bindActionCreators(遍历,dispatch包裹)
        dispatchProps = bindActionCreators(mapDispatchToProps,dispatch);
    }


    //dispatch修改store后，页面更新,subscript+forceUpdate
    //立即执行
    useLayoutEffect(()=>{
       const unsbuscribe = subscribe(()=>{
           //调用forceUpdate,相当于执行dispatch
           forceUpdate();
       });

       return (()=>{
           if (unsbuscribe){
               unsbuscribe();
           }
       })

    },[store]);

    console.log('dispatchProps',dispatchProps);//返回改装后的dispatch

    return <WrappedComponent {...props} {...stateProps} {...dispatchProps}/>
}


//手写Provider，根实例创建组件，并传值，最后渲染组件下的所有子组件
export default function Provider({children,store}){

    //接受store，通过context 实现夸层级通讯
    return <context.Provider value={store}>{children}</context.Provider>;
}



function bindActionCreator(creater,dispatch){
    //返回一个函数，在调用的时候执行
    return (...agrs)=>dispatch(creater(...agrs));
}

//接受的参数为，action集合和旧的dispatch方法,生成新的dispatch方法
export function bindActionCreators(creaters,dispatch) {
    //用法，便利action,包裹dispatch

    let obj = {};

    for (let key in creaters){
        obj[key] = bindActionCreator(creaters[key],dispatch);
    }

    return obj;
}
