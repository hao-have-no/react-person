import React, {Component} from 'react';

function Card(props){
    return (
        <div>
            {
                props.children
            }
        </div>
    )
}

function Formbutton(props){
    return (
        <div>
            <button onClick={props.children.defaultBtns.searchClick}> 默认查询</button>
            <button onClick={props.children.defaultBtns.resetClick}>默认重置</button>
            {
                props.children.btns.map((item, index) => {
                    return <button key={'btn' + index} onClick={item.onClick}>{item.title}
                    </button>
                })
            }
        </div>
    )
}


class CompositionPage  extends Component {
    render() {
        return (
            <div>
                <Card>
                    <p>我是内容</p>
                </Card>
                CompositionPage
                <Card>
                    <p>我是内容2</p>
                </Card>
                <Formbutton>
                    {{
                    defaultBtns: {
                    searchClick: () => console.log('默认查询'),
                    resetClick: () => console.log('默认重置')
                    },
                    btns: [
                    {
                        title: '查询',
                        onClick: () => console.log('查询')
                    }, {
                    title: '重置',
                    onClick: () => console.log('重置')
                         }
                    ]
                    }}
                </Formbutton>
            </div>
        );
    }
}

export default  CompositionPage ;
