import React from 'react';
import '../../static/style/components/header.scss'
import {Row, Col, Menu} from "antd";
import { HomeOutlined,PlayCircleOutlined,CameraOutlined } from "@ant-design/icons";


const Header = () => {
    return(
        <div className="header">
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className="header-logo">摸鱼浩</span>
                    <span className="header-txt">前端开发小白，划水摸鱼</span>
                </Col>
                <Col className="menu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode="horizontal">
                        <Menu.Item key="home" icon={<HomeOutlined />}>
                                首页
                        </Menu.Item>
                        <Menu.Item key="video" icon={<PlayCircleOutlined />}>
                                视频
                        </Menu.Item>
                        <Menu.Item key="life" icon={<CameraOutlined />}>
                                生活
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    )};

export default Header;
