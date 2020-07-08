## 自定义路由实现(通过Context跨层级通信来完成状态共享)

### context :跨层级通信，共享所有状态和第三方组件

### 在link中通过context,获取到history第三方组件库（history）

### 页面的更新可以使用forceUpdate或者setState

### 切换路由刷新组件的操作

## 各个部分的职责:

### 路由　Router

> BrowserRouter:使用h5提供的historyAPI, ( pushState , replaceState 和 popstate 事
件) 来保持 UI 和 URL 的同步
+ basename: string
+ ``` <BrowserRouter basename="/kkb"><Link to="/user" /></BrowserRouter>, <Link> 最终将被呈现为：<a href="/kkb/user" />```

> HashRouter
+ 使⽤ URL 的 hash 部分
+ 旧版本的浏览器可以使用，新版本的浏览器有些问题无法解决

> MemoryRouter
+ 把 URL 的历史记录保存在内存中的 <Router> （
+ 在测试和⾮浏览器环境中,如React Native

> Route
+ matchPath:使用和 <Route> 所使用的相同的匹配代码,接受两个参数
pathname: 第一个参数是要匹配的路径名。
props: 第二个参数是匹配的属性，它们与 <Route> 接受的匹配属性相同

> Link
+ 相当于a标签，里面封装了多个属性，通过跳转来更改router路由,渲染对应的页面

> Switch
+ 便利route，找到第一个匹配的元素



