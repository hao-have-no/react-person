import React,{useReducer,useEffect,useLayoutEffect} from 'react';
import {countReducer} from '../../store/hookStore';

function HooksPage(props) {

    useEffect(()=>{
        console.log('useEffect');
    })

    useLayoutEffect(()=>{
        console.log('useLayoutEffect');
    })

    const init=(initArg)=>{
        return initArg-0;
        //参数值替代
        //使用场景，字符串转数字
    }

    const [state,dispatch] = useReducer(countReducer,'0',init);

    return (
        <div>
            <h3>HooksPage</h3>
            <p>{state}</p>
            <button onClick={()=>{dispatch({type:'ADD'}),console.log('state',state)}}>add</button>
        </div>
    );
}

export default HooksPage;
