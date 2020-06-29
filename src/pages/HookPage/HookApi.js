import React, {Component, PureComponent, useCallback, useMemo, useState} from 'react';
import PureComponentPage from "../PureComponentPage/PureComponentPage";

function HookApi(props){
    const [count,setCount] = useState(0);
    const [val,setValue] = useState("");

    const expensive=useMemo(()=>{
        console.log('expensive');
        let sum=0;
        for (let i=0;i<count;i++){
            sum += i;
        }

        return sum;
    },[count]);
    //只有count改变的时候才会去计算


    const addClick=useCallback(()=>{
        console.log('expensive');
        let sum=0;
        for (let i=0;i<count;i++){
            sum += i;
        }

        return sum;
    },[count]);
    //只有count变化才改变



    return (
        <div>
            <h3>HookApi</h3>
            <p>UseMemoPage</p>
            <p>count:{count}</p>
            <p>expensive:{expensive}</p>
            <button onClick={()=>setCount(count+1)}>add</button>
            <input type="text" value={val} onChange={event=>setValue(event.target.value)}/>
            <Child addClick={addClick}></Child>
        </div>
    );
}

class Child extends PureComponent{
    render(){

        console.log('child render');

        const {addClick} = this.props;

        return(
            <div>
                <h3>CHild</h3>
                <button onClick={()=>console.log(addClick())}>添加</button>
            </div>
        )
    }
}

export default HookApi;
