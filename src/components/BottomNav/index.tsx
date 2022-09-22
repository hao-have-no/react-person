import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import {history} from 'umi';

const menu = [
  {title:'首页',link:'/',icon:'shouye'},
  {title:'购物车',link:'/cart',icon:'gouwuche'},
  {title:'订单列表',link:'/olist',icon:'liebiao'},
  {title:'我的',link:'/user',icon:'yonghu'}
];

interface BottomNavProps {
  pathname:string
}

class BottomNav extends Component<BottomNavProps> {
  render() {
    const {pathname} = this.props;
    console.log(pathname);
    return (
      <div>
          <TabBar>
            {menu.map(({title,link,icon})=>(
                <TabBar.Item
                 title={title}
                 key = {link}
                 icon={<span className={'iconfont icon-' + icon}></span>}
                 selectedIcon={<span className={'red iconfont icon-' + icon}></span>}
                 selected={pathname === link}
                 onPress={()=>{
                   history.push(link);
                 }}
                />
              )
            )}
          </TabBar>
      </div>
    );
  }
}

export default BottomNav;
