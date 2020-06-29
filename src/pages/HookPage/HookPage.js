import React, {useEffect, useState} from 'react';

//hook主要用于函数集组件，为组件提供state,props状态和类似于生命周期的副作用

function HookPage(props){
    const [count,setCount] = useState(0);
    const [date,setDate] = useState(new Date().toLocaleTimeString());

    useEffect(()=>{
        console.log('useEffect');
        document.title = `点击了${count}次`
    },[count]);
    //条件执行，在函数后面绑定count,只有count变化的时候才会再次执行

    //相当于DidMount和DidUpdate
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

    return (
        <div>
            <h3>HookPage</h3>
            <p>{count}</p>
            <p>{date}</p>
            <button onClick={() => setCount(count + 1)}>添加</button>
        </div>
    );
}

export default HookPage;
