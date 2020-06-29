# This is a react project for kkb

##　创建app
> 1.npx create-react-app <项目名>
> 2.npm init react-app <项目名>

## 自动创建react(jsx)文件 rcc+tab

## setState需要注意的点
> 1.this.state.num = 1;这种直接修改state状态是不会触发更新的，因为React的异步任务，而这个是同步行为
需要使用setState（{num，1}）

> 2.state更新是异步的，处于性能考虑，react会把多个异步聚集在一起调用

> 3.setState 同步执行：1.使用setTimeout 2.使用原生监听 3. 使用callback回调函数执行

> 4.setState会被合并，因为是批量进行更新的，后者会吧前者覆盖掉。如果不想合并，链式调用，分开传参
> eg:  function one(v){ this.setState(state => ({ counter: state.counter + v }));}   function count(){one(1);one(2);}

## Layout 组件复合　具名组件与不具名组件


## redux 使用场景
+ 大量的数据需要随着时间变化；
+ 你的state需要一个单一的数据源
+ 将state保存在顶层组件中已经无法满足需求
+ 某个状态需要全局共享

> view -> dispath -> action -> reducer(currentState,action) -> 返回新的state -> 处理state -> 返回view

## react-redux 
> 全局提供store，index.js

> 提供了两个api
+ Provider 为后代组件提供store 只引入一次，告别store需要每次使用都要引用
+ connect 为组件提供数据和变更⽅法

## pureComponent 
> 用作浅层的props和state的更新比较，如果对象层次比较深，则无法进行比较
> 在深层数据结构发生变化时调用 forceUpdate() 来确保组件被正确地更新。
> 也可以考虑使用 immutable 对象加速嵌套数据的比较。
> 此外，React.PureComponent 中的 shouldComponentUpdate() 
> 将跳过所有子组件树的 prop 更新。因此，请确保所有子组件也都是“纯”的组件。

## React.memo 只适用于函数组件
> 函数组件在给定相同 props 的情况下渲染相同的结果，那么你可以通过将其包装在 React.memo 中调用，
> 以此通过记忆组件渲染结果的方式来提高组件的性能表现 
