import React, {useEffect, useState} from 'react';

function FuncComponent(props){
    //可以通过hooks提供的use系列方法，实现state的缓存
    //hook提供的方法，是状态和方法以数组的形式出现
    const [date,setDate] = useState(new Date());

    //相当于生命周期
    useEffect(()=>{
        const timer = setInterval(()=>{
            setDate(new Date());
        },1000);
        return ()=>clearInterval(timer);
    },[]);

        return (
            <div>
                <h3>FuncComponent</h3>
                <p>{ date.toLocaleTimeString() }</p>
            </div>
        );
}

export default FuncComponent;