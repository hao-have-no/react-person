//声明Context跨组件通信方式

import * as React from "react";

//创建一个 Context 对象。当 React 渲染一个订阅了这个 Context 对象的组件，
// 这个组件会从组件树中离自身最近的那个匹配的 Provider 中读取到当前的 context 值。
export const ThemeContext = React.createContext({themeColor:"pink"});

//每个 Context 对象都会返回一个 Provider React 组件，它允许消费组件订阅 context 的变化。
export const ThemeProvider = ThemeContext.Provider;

//这里，React 组件也可以订阅到 context 变更。这能让你在函数式组件中完成订阅 context
export const ThemeConsumer = ThemeContext.Consumer;


//创建Context对象，并且声明发布者和订阅者
export const UserContext = React.createContext();
export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;


//扩展

// useContext
// 接收⼀个 context 对象（ React.createContext 的返回值）并返回该 context 的当前值。当前的
// context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value prop 决定。只能⽤
// 在function组件中。

// Class.contextType
// 挂载在 class 上的 contextType 属性会被重赋值为⼀个由 React.createContext() 创建的 Context
// 对象。这能让你使⽤ this.context 来消费最近 Context 上的那个值。你可以在任何⽣命周期中访问
// 到它，包括 render 函数中。