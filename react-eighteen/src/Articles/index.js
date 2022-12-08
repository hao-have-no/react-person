// tab 切换  发表评论 删除评论 点赞 表单控制
import './index.css'
import React from 'react'
import { v4 as uuid } from 'uuid'


// 时间格式化
function formatDate (time) {
    return `${time.getFullYear()}-${time.getMonth()}-${time.getDate()}`
}

class Article extends React.Component {
    state = {
        avatar:"https://gitee.com/react-course-series/react-component-demo/blob/master/src/images/avatar.png",
        // hot: 热度排序  time: 时间排序
        tabs: [
            {
                id: 1,
                name: '热度',
                type: 'hot'
            },
            {
                id: 2,
                name: '时间',
                type: 'time'
            }
        ],
        active: 'hot',
        list: [
            {
                id: 1,
                author: '刘德华',
                comment: '给我一杯忘情水',
                time: new Date('2021-10-10 09:09:00'),
                // 1: 点赞 0：无态度 -1:踩
                attitude: 1
            },
            {
                id: 2,
                author: '周杰伦',
                comment: '哎哟，不错哦',
                time: new Date('2021-10-11 09:09:00'),
                // 1: 点赞 0：无态度 -1:踩
                attitude: 0
            },
            {
                id: 3,
                author: '五月天',
                comment: '不打扰，是我的温柔',
                time: new Date('2021-10-11 10:09:00'),
                // 1: 点赞 0：无态度 -1:踩
                attitude: -1
            }
        ],
        msg:''//评论内容
    }

    // 更新输入框的值
    textChange = (e) => {
        this.setState({
            msg: e.target.value
        })
    }

    // 切换tab
    switchTab=(type)=>{
        this.setState({
            active:type
        })
    }

    // 发布评论
    addComment=()=>{
        this.setState({
            list:[{
                id:uuid(),
                author:'爱德华',
                comment:this.state.msg,
                time:new Date(),
                attitude:0
            },...this.state.list],
            msg:''
        })
    }

    //删除评论
    delComment=(id)=>{
        const list = this.state.list.filter(item=>item.id !== id)
        this.setState({list})
    }

    //点赞
    addStar=(index,type)=>{
        const list = this.state.list;
        list[index]['attitude'] = type === list[index]['attitude']?0:type;
        this.setState({
            list
        })
    }

    render () {
        return (
            <div className="App">
                <div className="comment-container">
                    {/* 评论数 */}
                    <div className="comment-head">
                        <span>{this.state.list.length} 评论</span>
                    </div>
                    {/* 排序 */}
                    <div className="tabs-order">
                        <ul className="sort-container">
                            {
                                this.state.tabs.map(tab => (
                                    <li
                                        onClick={()=>this.switchTab(tab.type)}
                                        key={tab.id}
                                        className={tab.type === this.state.active ? 'on' : ''}
                                    >按{tab.name}排序</li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* 添加评论 */}
                    <div className="comment-send">
                        <div className="user-face">
                            <img className="user-head" src={this.state.avatar} alt="" />
                        </div>
                        <div className="textarea-container">
              <textarea
                  cols="80"
                  rows="5"
                  placeholder="发条友善的评论"
                  className="ipt-txt"
                  value={this.state.msg}
                  onChange={this.textChange}
              />
                            <button className="comment-submit" onClick={this.addComment}>发表评论</button>
                        </div>
                        <div className="comment-emoji">
                            <i className="face"></i>
                            <span className="text">表情</span>
                        </div>
                    </div>

                    {/* 评论列表 */}
                    <div className="comment-list">
                        {
                            this.state.list.map((item,index) => (
                                <div className="list-item" key={item.id}>
                                    <div className="user-face">
                                        <img className="user-head" src={this.state.avatar} alt="" />
                                    </div>
                                    <div className="comment">
                                        <div className="user">{item.author}</div>
                                        <p className="text">{item.comment}</p>
                                        <div className="info">
                                            <span className="time">{formatDate(item.time)}</span>
                                            <span onClick={()=>this.addStar(index,1)} className={item.attitude === 1 ? 'like liked' : 'like'}>
                        <i className="icon" />
                      </span>
                                            <span onClick={()=>this.addStar(index,-1)} className={item.attitude === -1 ? 'hate hated' : 'hate'}>
                        <i className="icon" />
                      </span>
                                            <span className="reply btn-hover" onClick={()=>this.delComment(item.id)}>删除</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>)
    }
}

export default Article;
