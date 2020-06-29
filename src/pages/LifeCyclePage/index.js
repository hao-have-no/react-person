import React, {Component} from 'react';
import PropTypes from "prop-types";

class LifeCycle extends Component {

    //16.3之前的生命周期
    //首先会声明
    //defaultProps,propTypes
    //defaultProps 可以为 Class 组件添加默认 props。
    // 这一般用于 props 未赋值，但又不能为 null 的情况。
    //PropTypes 提供一系列验证器，可用于确保组件接收到的数据类型是有效的

    static defaultProps = {
        // msg:'omg'
    };

    //类型校验
    static propTypes={
        // msg: PropTypes.string.isRequired
    };

    //constructor 构造函数
    // 通常，在 React 中，构造函数仅用于以下两种情况：
    // 通过给 this.state 赋值对象来初始化内部 state。
    // 为事件处理函数绑定实例
    //如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数。
    constructor(props){
        super(props);
        console.log('constructor')
        this.state={
            count:0
        }
    }

    //即将废除的生命周期
    //componentWillMount
    // componentWillReceiveProps
    // componentWillUpdate

    //多了fiber导致生命周期不合适，所以会被废除

    //引入的新的生命周期
    //static getDerivedStateFromProps  在调⽤ render ⽅法之前调⽤，并且在初始挂载及后续更新时都会被
    // 调⽤。它应返回⼀个对象来更新 state，如果返回 null 则不更新任何内容。

    static getDerivedStateFromProps(props, state) {
        const {count} = state;
        console.log('getDerivedStateFromProps',count);
        return count<3?null:{count:0}
    }

    //getSnapshotBeforeUpdate
    //在render之后，在componentDidUpdate之前。
    // getSnapshotBeforeUpdate() 在最近⼀次渲染输出（提交到 DOM 节点）之前调⽤。它使得组件能
    // 在发⽣更改之前从 DOM 中捕获⼀些信息（例如，滚动位置）。此⽣命周期的任何返回值将作为参数传
    // 递给 componentDidUpdate(prevProps, prevState, snapshot)

    getSnapshotBeforeUpdate(prevProps, prevState, snapshot) {
        const { count } = prevState;
        console.log("getSnapshotBeforeUpdate", count);
        return {msg:"getSnapshotBeforeUpdate"};
        //返回的值会被componentDidUpdate接受
    }

    componentWillMount() {

        console.log('componentWillMount')
    }

    componentDidMount() {

        console.log('componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {

        const {count} = nextState;

        console.log('shouldComponentUpdate',nextProps, nextState, nextContext);

        //可以进行性能优化，控制更新过程中渲染页面

        return count !== 3;
        //相当于shouldComponentUpdate改变了state.count的值,但是页面的update和render被终止，并没有重新渲染
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        //组件卸载之前
        console.log('componentWillUpdate')
    }

    /* UNSAFE_componentWillUpdate() {
     //不推荐，将会被废弃
     console.log("componentWillUpdate", this.state.count);
     } */

    componentDidUpdate(prevProps, prevState, snapshot) {

        console.log('componentDidUpdate')
    }



    setCount=()=>{
        this.setState({count:this.state.count + 1})
    };



    render() {
        console.log('render',this.props);
        const { count } = this.state;
        return (
            <div>
                <h3>LifeCycle</h3>
                <p> {count}</p>
                {
                 count %2 == 0&&<Child count={count}/>
                }
                <button onClick={this.setCount}>升级</button>
            </div>
        );
    }
}

class Child extends Component{

    //初次渲染不加载，当挂载的组件接受到新的props才会执行
    componentWillReceiveProps(nextProps, nextContext) {
        console.log('componentWillReceiveProps',nextProps, nextContext);
    }

    //在组件卸载时需要取消或者实现的业务
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    render() {
        console.log('child render');

        const {count} = this.props;

        return(
            <div>
                <h3>Child</h3>
                <p>{count}</p>
            </div>
        )
    }
}

export default LifeCycle;
