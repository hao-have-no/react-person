// mobx 模块拆分 导出统一的业务组件
import React from 'react'
import ListStore from './list.Store'
import CounterStore from './couter.Store'
import LoginStore from './login.Store'
import UserStore from './user.Store'
import ChannelStore from './channel.Store';

// 声明 rootStore
class RootStore{
    // 子模块实例化
    constructor(){
        this.counterStore = new CounterStore();
        this.listStore = new ListStore();
        this.loginStore = new LoginStore();
        this.userStore = new UserStore();
        this.channelStore = new ChannelStore();
        // 根store 有两个属性 分别counterStore和listStore
        // 各自对应的值 就是我们导入的子模块实例对象
    }
}

// 实例化操作
const rootStore = new RootStore();

// 使用react context机制 完成统一方法封装 建立全局的通信机制
const context  = React.createContext(rootStore);

const useStore = ()=> React.useContext(context);

export default useStore
