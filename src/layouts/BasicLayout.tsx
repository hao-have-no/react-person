import React, { useEffect } from 'react';
import BottomNav from '@/components/BottomNav';
import '@/static/icon/iconfont.css';
import { connect, Location,Dispatch } from 'umi';
import style from './BasicLayout.less'

interface BasicLayoutProps {
  location:Location,
  dispatch:Dispatch,
  user:any
}

const BasicLayout:React.FC<BasicLayoutProps> = props =>{
  //umi路由规则，div中的children是子路由，进行渲染
  const { children,location,dispatch,user} = props;
  console.log(props,props.children);

  //获取用户基本信息
  useEffect(()=>{
    //请求流程 ui->model->service->mock
      if (dispatch){
        //namespace/effects
        dispatch({type:'user/fetchCurrent'})
      }
  },[]);

  const {pathname} = location;

  // console.log(user);

  return(
    <div className={style.main}>
      <article>{children}</article>
      <footer>
        <BottomNav pathname={pathname}/>
      </footer>
    </div>
  );
}

//connect进行上下文连接，承接ui层和model层,
//通过connect将model中的dispatch,state,history等暴露，使ui层调用
export default connect(({user})=>({user}))(BasicLayout);
