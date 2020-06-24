import React, {Component} from 'react';
import styles from "./index.module.scss"

const menu=[
    {title:'首页',link:'/',icon:'shouye'},
    {title:'购物车',link:'/cart',icon:'huiyuan'},
    {title:'订单列表',link:'/orderlist',icon:'dingdan'},
    {title:'用户中心',link:'/user',icon:'wodeguanzhu'}
];

class BottomNav extends Component {
    render() {
        const {activeNum,setActiveNum} = this.props;
        return (
            <div>
                <h3>BottomNav</h3>
                <div>{ activeNum }</div>
                {
                    menu.map((item,index)=>(
                        <MenuItem
                            key={item.link}{...item}
                            active={activeNum === index}
                            onClick={()=>setActiveNum(index)}
                        />
                    ))
                }
            </div>
        );
    }
}

function MenuItem({title,icon,active,onClick}){
    return (
        <div className={ active?styles.active: '' } onClick={onClick}>
            <span className={"iconfont icon-" + icon}/>
            <span className={styles.title}>{ title }</span>
         </div>
    )
}

export default BottomNav;
