import React from 'react';
import {Divider,Avatar} from "antd";
import "../../static/style/components/author.scss"
import {GithubOutlined,QqOutlined,DingdingOutlined,WeiboCircleOutlined,TaobaoOutlined} from "@ant-design/icons";

const Author = () => {
    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="https://avatars2.githubusercontent.com/u/22188003?s=460&u=5816eb1340e8c70290164cd49aa4ffa531963368&v=4" /></div>
            <div className="author-introduction">
                摸鱼程序员，专注于WEB和移动前端开发。每天争取早点结束任务，开启摸鱼生涯。此地维权无门，此时无能为力，此心随波逐流。
                <Divider>社交账号</Divider>
                <Avatar size={28} icon={<GithubOutlined />} className="account"  />
                <Avatar size={28} icon={<QqOutlined />} className="account" />
                <Avatar size={28} icon={<DingdingOutlined />}  className="account"  />
                <Avatar size={28} icon={<WeiboCircleOutlined />}  className="account"  />
                <Avatar size={28} icon={<TaobaoOutlined />}  className="account"  />
            </div>
        </div>
    );
};

export default Author;
