

// 暗号：苏丹
export default function combineReducers(reducers){
    return function combination(state={},action){
        let nextState = {};
        let hashChanged = false;

        console.log('reducers',reducers);

        for (let key in reducers){
            const reducer = reducers[key];
            nextState[key] = reducer(state[key],action);
            hashChanged = hashChanged||nextState[key] !== state[key]
            //防止后面的覆盖前面的，每次都需要去对比
        }

        hashChanged = hashChanged||Object.keys(reducers).length !== Object.keys(state).length;

        console.log('combination',nextState,state);

        return hashChanged?nextState:state;
    }
}
