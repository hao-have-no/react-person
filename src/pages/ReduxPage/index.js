import React, {Component} from 'react';
import store from '../../store'

class ReduxPage extends Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            // dispatch执行的时候 ，执行订阅函数
            this.forceUpdate();
        });
    }

    componentWillUnmount() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }

    add = () => {
        console.log('store',store);
        store.dispatch({type: "ADD"});

    };

    //异步
    // asyAdd = ()=> {
    //     //延迟函数需要借助中间件才行
    //     //dispatch里的都是action
    //     store.dispatch((dispatch,getState)=>{
    //         console.log('getState',getState());
    //         setTimeout(()=>{
    //             console.log('123');
    //             store.dispatch({type: "ADD"})
    //         },1000);
    //     })
    // }

    render() {
        return (
            <div>
                <h3>ReduxPage</h3>
                <p>{store.getState().count}</p>
                <button onClick={this.add}>add</button>
            </div>
        );
    }
}

export default ReduxPage;
