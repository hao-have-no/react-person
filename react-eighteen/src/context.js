// context 全局通信  避免prop 深层次组件嵌套

import React from "react";
import './app.css'

const ThemeContext = React.createContext('light');

function Button(props){
    return <span>{props.theme}</span>
}

class ThemedButton extends React.Component{
    static contextType = ThemeContext;
    render() {
        // this.context 取得 context.provider 的 value
        return <Button theme={this.context} />;
    }
}

function Toolbar(){
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

// context 会影响组件的复用性
// 只是层层传递某个属性公用, 考虑组件复合
// Page --> pageLayout ---> navigation --> link ---> avatar  如果类似这种的嵌套 而 avatar 需要参数,则需要一层层的传递
// 组件复合 将avatar组件传递下去  比如 后三个为一个组件  前两个分别为组件 减少嵌套和props的传递


// jxs 样式控制
// 1. 行内样式 style  双括号 返回的是样式的对象
// 2. 类名样式 className
const style = {color:"red",fontSize:'30px'}

function Toolbars(){
    function alerts(){
        window.alert('123')
    }
    return (
        <div onClick={alerts}>
           123456
        </div>
    );
}

export default function Context(){
    return (
        <div>
            <ThemeContext.Provider value="ssss">
               <Toolbars/>
                <br/>
                <span style={{color:"red",fontSize:'30px'}}>sass style</span>
                <br/>
                <span style={style}>sass style</span>
                <br/>
                <span className='active'>sass style</span>
                <Toolbar />
            </ThemeContext.Provider>
        </div>
    );
}
