/*
 * @Author: fenghao
 * @Date: 20-10-24 下午6:20
 * @LastEditors: fenghao
 * @LastEditTime: 20-10-24 下午6:20
 * @Description: 
 */

//定义user的模型
import { Effect,Reducer } from 'umi';
import { queryCurrent } from '@/services/user';

//接口返回值的定义
//映射具体的接口返回值
interface CurrentUser{
  name?: string;
  icon?: string;
  userid?: string;
}


export interface UserModelState{
  currentUser: CurrentUser
}


export interface UserModelType{
  namespace:'user' //唯一标识
  state:UserModelState,
  effects:{
    fetchCurrent:Effect //副作用
  },
  reducers:{
    saveCurrentUser:Reducer<UserModelState>
  }
}


//实现类
//定义接口的格式，来存储数据
const UserModel:UserModelType={
  namespace:'user', //唯一标识
  state:{
    currentUser:{}
  },
  effects:{
    //副作用，获取当前用户信息
    //umi-reducer的使用规范
    // 生成器函数，获取想要的数据，可请求服务器，可取model中的state。
    // 但为分工明确，不能直接修改state，可通过put方法调用reducer修改state
   *fetchCurrent(_,{call,put}){
     //redux-suga 进行异步请求,底层凤凰是generate
     const response = yield call(queryCurrent);
     yield put({type:'saveCurrentUser',payload:{...response}})
     //获取的数据，通过reducer,进行存储,存储到
   }
  },
  //通过dispatch调用
  reducers:{
    //保存当前用户
    //解构请求的内容
    saveCurrentUser(state,action){
      //希望返回的是对象，对payload封装处理
      // console.log(state,action);
      // redux中的reducer，接受state和action为参数，返回新的state
      return {...state,currentUser:{...action.payload}||{}}
    },
  }
};

export default UserModel
