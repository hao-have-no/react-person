import React from 'react';

function ApplyMiddleware(...middlewares) {
    //接受很多中间件
    //源码中定义的，applyMiddleware最终返回的是store和加强版的store
    //其中源码中也用createStore获取了store

    //enhancer(createStore)(reducer) 对应下面的这个返回值方式
    //也就是reduce的用法，函数聚集
    //return createStore=> reducer  相当于 createStore(reducer)

    return createStore=> reducer=>{

        console.log('apply createStore',createStore);

        console.log('apply reducer',reducer);

        //createStore是从enhancer中带进来的
        let store = createStore(reducer);

        console.log('create store',store);

        //dispath可以从store中获取，store实例有getState , dispatch, subscribe
        let dispatch = store.dispatch;

        //todo 加强dispatch

        //定义api,以便于后期中间间需要做派发，获取state状态等操作
        const midApi={
            getState:store.getState,
            //包一层，避免污染
            dispatch:(action,...args) => dispatch(action,...args)
        }


        console.log('midAPi',midApi);
        console.log('middlewares',middlewares)

        //传入api
        //中间件便利，导入api,此时中间件就可以获取状态和派发事件了
        //链式调用中间件
        const middlewaresChain = middlewares.map(middleware => middleware(midApi));


        console.log('middlewaresChain',middlewaresChain);

        //compose接受一系列function函数进行复合
        //store.dispatch作为初始值，进行其他函数的符合a(b(c(store.dispatch)))
        dispatch = compose(...middlewaresChain)(store.dispatch);

        console.log('dispatch',dispatch);
        //接受到的store再返回
        return {
            ...store,
            //要返回加强版dispatch
            dispatch
        }
    }
}


// 使用compose,聚合函数
function compose(...funcs){
    if (funcs.length === 0){
        return arg => arg}
    if (funcs.length === 1){return funcs[0]}

    return funcs.reduce((a,b)=>(...args)=>a(b(...args)))
}

export default ApplyMiddleware;
