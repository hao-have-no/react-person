# React-redux

## Hooks
> 常用的
+ useState　具有状态
+ useEffect 副作用，延迟的，异步的
+ useContext 跨层级通信

>其他
+ useReducer
+ useCallback 返回函数
+ useRef 使用引用
+ useImperativeHandle 配合useRef　自定义暴露给父组件相关值
+ useLayoutEffect　同步的

## 自定义 react-redux
+ 使用connect高阶组件的方式，搭配context跨组件通信，完成所有组件的共享store
+ 借助useContext,useReducer,useLayoutEffect等hooksApi完成高阶组件的开发

