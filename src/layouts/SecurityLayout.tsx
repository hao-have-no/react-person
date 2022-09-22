/*
 * @Author: fenghao
 * @Date: 20-11-15 下午4:39
 * @LastEditors: fenghao
 * @LastEditTime: 20-11-15 下午4:39
 * @Description: 
 */
import React,{useEffect} from 'react';
import { connect, Redirect } from 'umi';
import { ConnectProps, ConnectState, UserModelState } from '@/models/connect';

interface SecurityLayoutProps extends ConnectProps{
  user:UserModelState
}

const SecurityLayout:React.FC<SecurityLayoutProps> = ({user,children,location}) => {
  const { userid } = user.currentUser;
  const isLogin = !!userid;
  if (!isLogin) {
    // 没有登录 去登录页
    return (
      <Redirect
        to={{ pathname: '/login', state: { from: location.pathname } }}
      />
    );
  }
  return children;
};

export default connect(({user}:ConnectState)=>({user}))(SecurityLayout);
