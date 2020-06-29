import React, {useEffect, useState} from 'react';

//hook主要用于函数集组件，为组件提供state,props状态和类似于生命周期的副作用

function CustomHook(props){
    const [count,setCount] = useState(0);

    if (count == 0){
        // const [count,setCount] = useState(0);
        // 这种写法是错误的
    }

    //相当于DidMount和DidUpdate
    useEffect(()=>{
        console.log('useEffect');
        document.title = `点击了${count}次`
    },[count]);
    //条件执行，在函数后面绑定count,只有count变化的时候才会再次执行

    return (
        <div>
            <h3>CustomHook</h3>
            <p>{count}</p>
            <p>{useClock()}</p>
            <button onClick={() => setCount(count + 1)}>添加</button>
        </div>
    );
}

//抽离时钟组件
//自定义的hook组件要用use开头
//实现状态逻辑共用
function useClock(){
    const [date,setDate] = useState(new Date().toLocaleTimeString());

    useEffect(()=>{
        //但是这样timer一直会被定义
        //所以需要增加条件
        console.log('timer');
        const timer = setInterval(()=>{
            setDate(new Date().toLocaleTimeString());
        });

        //类似于willUnMount
        //清除副作用
        //在组件卸载时，对定时器．订阅者这些操作需要清除解绑
        return ()=>clearInterval(timer);
    },[]);
    //如果是空数组，相当于didMount

    return date;
}


//使用规则
// 1.只能在函数最外层调用hook,function之下
// 2. 只能在react的函数组件中才能使用hook

export default CustomHook;
