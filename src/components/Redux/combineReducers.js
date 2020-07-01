

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
        }

        hashChanged = hashChanged||Object.keys(reducers).length !== Object.keys(state).length;

        return hashChanged?nextState:state;
    }
}
