import React from 'react'
import { Button } from 'antd';

// 生命周期
// 挂载 constructor(创建组件执行,初始化只执行一次-->用于初始化state,创建Ref,解决this指向)
//     render(更新时就会执行)(纯净不含副作用 可能会被react暂停,终止或者重启) componentDidMount(组件挂载,初始化时执行一次)
// 更新时 render componentDidUpdate
// 卸载时 componentWillUnmount
// commit(component的三个周期 ,使用dom,运行副作用函数,安排更新)
// https://img-blog.csdnimg.cn/c447e1f969b5428ebc98c9363a5ba263.png#pic_center

export default  class Lifes extends React.Component{
    constructor(props){
        super(props);
        console.log('constructor')
    }

    state={
      count:0
    }

    clickHandle(){
        this.setState({
            count:this.state.count+1

        })
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }


    render() {
        console.log('render');
        return(
            <div>life{ this.state.count }
            <Button type="primary" onClick={()=>this.clickHandle()}>+</Button>
            </div>
        )
    }
}


