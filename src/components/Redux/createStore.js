import React from 'react';

//enhancer加强者模式
//可以接受一些中间件的使用(中间件加强，加强dispatch的类型)
//原来只能接受对象形式的action,现在希望能够接受function等
function createStore(reducer,enhancer) {
    //reducer:定义好的修改规则


   //enhancer:首先要拿到老的action
   if (enhancer){
       //加强dispatch
       //相当于使用reduce函数，再嵌套一层，用中间件再给dispatch包含一层,在执行一个createStore(reducer)操作
       //为什么用CreateStore,CreateStore执行后可以拿到dispatch
       //return enhancer(CreateStore) 返回加强版的dispatch,最后还是要修改store
       //执行reducer,返回store

       console.log('createStore reducer',reducer);

       console.log('enhancer',enhancer(createStore));

       console.log('enhancer2',enhancer(createStore)(reducer));

       return enhancer(createStore)(reducer);
   }

    //切记：redux只有一个state状态
    let currentState;
    let currentListeners = [];//监听队列

    //获取store state
    function getState(){
        return currentState;
    }

    //修改状态
    function dispatch(action){
        console.log('action',action)
        //调用reducer,来进行处理
        currentState = reducer(currentState,action);
        console.log('currentState',currentState);
        // store state已经发生变化了
        //next step:通知组件，更新状态
        //便利数组队列
        currentListeners.forEach(listener=>listener())
    }

    //可被多次执行
    function subscribe(listener){
        console.log(listener,currentListeners)
        currentListeners.push(listener);

        return ()=>{
            // currentListeners.filter(item != listener)
            currentListeners = [];
        }
    }

    //执行一辩dispath,使state有一个初始值
    dispatch({type:'@@@@@@@@@@/@@@@@@@@'});


    return {getState , dispatch, subscribe}
}

export default createStore;
