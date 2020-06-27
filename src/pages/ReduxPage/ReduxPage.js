import React, {Component} from 'react';
import store from '../../store'

class ReduxPage extends Component {

    //redux是一个发布订阅者模式
    //发生变化需要通知订阅者变化

    componentDidMount(){
        store.subscribe(()=>{
            //执行回调函数
            this.forceUpdate();
        })
    }


    add=()=>{
        store.dispatch({type:'ADD',payload:100})
    };

    render() {
        return (
            <div>
                <h3>ReduxPage</h3>
                <div>{store.getState()}</div>
                <button onClick={this.add}>增加</button>
            </div>
        );
    }
}

export default ReduxPage;