# Redux,React-redux

## React是单项数据流，没有响应式

### Reducer方法(在Redux中是定义各种修改store规则)
> 主要接受action和state,返回新的state  (previousState,action) => newState
> 纯函数，用来管理状态，接受什么参数返回什么参数
> 定义了state的修改规则

> 禁止操作
+ 修改传入参数
+ 副作用

### store更新了，如何更新页面
> 订阅者模式，通过subscribe订阅状态，这样订阅的部分发生变化了，对应的订阅者同步更新


### react-redux,redux的区别
> redux由于每次在使用时都需要注册进来，状态值改变后，需要重新render和getState()
> react-redux提供两个api,只需要在顶级节点引用就行，其他子节点都具有相同属性
