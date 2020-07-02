// import {combineReducers} from "redux"
// import thunk from 'redux-thunk'
// import logger from 'redux-logger'
import {createStore,applyMiddleware,combineReducers} from "../components/Redux/";

//payload 根据数据进行变化
//定义state初始化和修改规则　reducer是一个纯函数
//action提交，对action进行识别处理，返回新的state
//{type,payload}就是一个action对象
// state可以为对象 {type}为action
 function countReducer(state = 0,action){
    switch (action.type) {
        case 'ADD':
            //return {...state,...newState}
            // return {{num:1},{num:2}}
            return state+1;
        default:
            return state
    }
}

function minReducer(state = 0,action){
    switch (action.type) {
        case 'MINUS':
            return state-1;
        default:
            return state
    }
}

// const reducers = combineReducers({addCount,minuxs});

// console.log('reducers',reducers);

//combineReducers
//相当于合成reducer,生成新的reducer
//使用的时候getState()[key]

//创建store保存状态
let reducers = combineReducers({
    count:countReducer,
    minout:minReducer
});

 console.log('reducers',reducers);

const store = createStore(reducers);
// const store = createStore(counterReducer,applyMiddleware(thunk,logger));

//thunk 执行后的回调函数在log中必须执行,
// logger是第一个执行函数，如果不执行的话，后面就相当于不传参的执行

console.log('last store',store);

export default store

//异步的.asyAdd
function thunk({dispatch,getState}){
    //action ==> {type:'ADD'}
    //大量使用reduce的写法,接受一个参数，返回的是个函数去执行第二个参数
    //next 就是 store.dispatch
    return next => action=>{
        //第一种直接传入dispatch
        //第二种传入callback

        if (typeof action === 'function'){
            console.log('thunk',action,dispatch,getState);
            return action(dispatch,getState);
        }

        console.log('next action');

        return next(action);
    }
}


function addCount(state = 0, action){
    const {type} = action;
    switch (type) {
        case 'ADD':
            //return {...state,...newState}
            // return {{num:1},{num:2}}
            return state+1;
        default:
            return state
    }
}

function minuxs(state = 0, action){
    const {type} = action;
    switch (type) {
        case 'MINUS':
            return state-1;
        default:
            return state
    }
}

function logger({getState}){
    //next相当于reduce==> (a,b)=>
    //next 是 dispatch(action)
    return next=>action=>{
       console.log("==================");

       console.log(action.type,'执行')

        const preState = getState();

        console.log('preState',preState)

        console.log('next',next);

        next(action);
        console.log("==================");

        const nextState = getState();

        console.log('nextState',nextState);

        // console.log('returnValue',returnValue);

        // return returnValue;
    }
}
