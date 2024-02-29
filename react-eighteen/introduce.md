### redux 实战

#### 发布订阅者模式
> store.dispatch 发布   store.subsribe 订阅
+  创建store文件，引入redux  利用createStore(reducer(hook 中所使用的useReducer))---》redux最新版以configureStore替代 createStore

+ app.js引入store，就可以使用 store的发布订阅api了
+ useEffect 中 return 的函数 在组件销毁的时候会执行（副作用会清楚上一次的）
+ state 以单一对象存储在store对象中,且state只读，每次返回一个新对象；使用纯函数reducer执行state的更新

> 原理
+ 