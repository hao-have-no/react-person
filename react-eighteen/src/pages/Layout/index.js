import {
    HomeOutlined,
    DiffOutlined,
    EditOutlined,
    LogoutOutlined
} from '@ant-design/icons'
import {Layout, Menu, Popconfirm } from 'antd';
import React, {useEffect} from 'react';
import './index.scss'
import {Outlet,useLocation,useNavigate} from "react-router-dom";
import useStore from "@/store";
import { observer } from 'mobx-react-lite'
const { Header, Sider,Content } = Layout;

const GeekLayout = () => {

    const location = useLocation();
    // 这里是当前浏览器上的路径地址
    const selectedKey = location.pathname;
    // 获取登录人信息
    const {userStore,loginStore} = useStore();
    const navigate = useNavigate()

    useEffect(() => {
        try {
            userStore.getUserInfo()
        } catch { }
    }, [userStore]);

    const onConfirm=()=>{
        // 退出登录 删除token 跳回到登录
        loginStore.loginOut()
        navigate('/login')
    };

    const menuList = [
        {key:'/',label:'数据概览',icon: React.createElement(HomeOutlined)},
        {key:'/article',label:'内容管理',icon: React.createElement(DiffOutlined)},
        {key:'/publish',label:'发布文章',icon: React.createElement(EditOutlined)},
    ];

    const goMenu=(menu)=>{
        navigate(menu.key)
    }

    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <div className="user-info">
                    <span className="user-name">{userStore.userInfo.name}</span>
                    <span className="user-logout">
                        <Popconfirm onConfirm={onConfirm} title="是否确认退出？" okText="退出" cancelText="取消">
                          <LogoutOutlined /> 退出
                        </Popconfirm>
                     </span>
                </div>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        theme="dark"
                        items={menuList}
                        defaultSelectedKeys={[selectedKey]}
                        style={{ height: '100%', borderRight: 0 }}
                        onSelect={goMenu}
                    >
                    </Menu>
                </Sider>
                <Layout className="layout-content" style={{ padding: 20 }}>
                    <Content>
                        <Layout className="layout-content" style={{ padding: 20 }}>
                            {/* 二级路由出口 */}
                            <Outlet />
                        </Layout>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default observer(GeekLayout);
