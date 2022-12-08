import React,{ useState,useEffect } from 'react'
import {observer} from "mobx-react-lite";
import useStore from '../store/index'


function Example(){
    const [count, setCount] = useState(0);
    // 组件中执行过数据获取、订阅或者手动修改过 DOM。我们统一把这些操作称为“副作用”，或者简称为“作用”。
    // useEffect 就是一个 Effect Hook，给函数组件增加了操作副作用的能力
    // React 会在每次渲染后调用副作用函数 —— 包括第一次渲染的时候
    const rootStore = useStore();

    useEffect(()=>{
        // 使用浏览器的 API 更新页面标题
        document.title = `You clicked ${count} times`;
    });

    return (
        <div style={{marginBottom:'20px'}}>
            {rootStore.listStore.list}
            {rootStore.counterStore.count}
            <button onClick={()=>rootStore.counterStore.addCount()}>+</button>
            <p>you clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>click me</button>
        </div>
    )
}

export default observer(Example)


