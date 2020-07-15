import React, {Component} from 'react';
import {Link} from "react-router-dom";
import styles from "./index.module.scss"

const menu=[
    {key: "home",title:'首页',link:'/', icon: "shouye"},
    {key: "cart",title:'欢迎',link:'/welcome', icon: "fenlei"},
    {key: "olist",title:'登录页面',link:'/login',icon: "icon-"},
    {key: "user",title:'用户中心',link:'/user', icon: "wode"}
];

export default class BottomNav extends Component {
    componentWillUnmount() {
        console.log("BottomNav componentWillUnmount"); //sy-log
    }
    render() {
        return (
            <ul className="bottomNav">
                {menu.map(item => (
                    <MenuItem key={item.key} {...item} />
                ))}
            </ul>
        );
    }
}

function MenuItem(props) {
    return (
        <li className="menuItem">
            <span className={"iconfont icon-" + props.icon}></span>
            <Link to={props.link}>{props.title}</Link>
        </li>
    );
}
