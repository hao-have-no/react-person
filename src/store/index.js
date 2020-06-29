import {createStore} from "redux";

//payload 根据数据进行变化
//定义state初始化和修改规则　reducer是一个纯函数
//action提交，对action进行识别处理，返回新的state
//{type,payload}就是一个action对象
export const counterReducer =(state = 0, {type,payload}) =>{
    switch (type) {
        case 'ADD':
            return payload + state;
        case 'MINUS':
            return state - payload;
        default:
            return state
    }
}

//创建store保存状态
const store = createStore(counterReducer);

export default store
