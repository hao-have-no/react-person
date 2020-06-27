import {createStore} from "redux";

//payload 根据数据进行变化
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

const store = createStore(counterReducer);

export default store