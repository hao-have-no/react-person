import React, {Component} from 'react';
import { ThemeProvider,UserProvider } from "../../Context";
import ConsumerPage from "./ConsumerPage";

class ContextPage extends Component {

    //声明继承
    constructor(props){
        super(props);
        this.state={
            theme:{
                themeColor:'red'
            },
            user:{
                name:'小明'
            }
        }
    }


    changeColor= ()=>{
        const { themeColor } = this.state.theme;
        this.setState({theme:{themeColor:themeColor === "red" ? "green" : "red"}})
    };

    render() {
        const { theme,user } = this.state;
        //Context：1.跨层级 2.需要子组件状态联动

        //ConsumerPage定义在Provider中间，可以直接进行参数的 接收
        //默认值在于不传值的情况下，会使用context中定义好的值

        //避免在使用时直接使用对象
        // context 会使⽤参考标识（reference identity）来决定何时进⾏渲染，这⾥可能会有⼀些陷阱，当
        // provider 的⽗组件进⾏重渲染时，可能会在 consumers 组件中触发意外的渲染。举个例⼦，当每⼀次
        // Provider 重渲染时，以下的代码会重渲染所有下⾯的 consumers 组件，因为 value 属性总是被赋值
        // 为新的对象：
        //{state:'123'} === {state:'123'} 都是false
        //eg:<ThemeProvider value={{theme.themeColor}}>
        // 发生变化
        // 应该这样子使用：<ThemeProvider value={this.state.theme}>
        return (
            <div>
                <h3>ContextPage</h3>
                <button onClick={this.changeColor}>change color</button>
                <ThemeProvider value={theme}>
                    <UserProvider value={user}>
                        <ConsumerPage/>
                    </UserProvider>
                </ThemeProvider>
            </div>
        );
    }
}

export default ContextPage;