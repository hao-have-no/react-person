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
