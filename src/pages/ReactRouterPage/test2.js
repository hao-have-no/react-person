import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import {login} from "../../action/user";

//connect:将当前组件与store进行链接
export default connect(
    ({user}) => ({isLogin: user.isLogin, loading: user.loading, err: user.err}),
    {
        login
    }
)
(class PageTwo extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {name:""}
    // }
    //
    // nameChange = event =>{
    //     this.setState({name:event.target.value})
    // }

    render() {
        const {isLogin, loading ,location,login,err} = this.props;
        console.log('loginPage',this.props);
        //如果直接进入的是登录页，则
        const {redirect = '/'} = location.state || {};

        if (isLogin){
            //登录即跳转
            return <Redirect to={redirect}/>
        }
        
        // const {name} = this.state;

        return (
            <div>
                <h3>登录</h3>
                {/*<input type="text" value={name} onChange={this.nameChange} />*/}
                {/*<p className="red">{err.msg}</p>*/}
                <button onClick={login}>
                    login
                    {/*{loading ? "loading..." : "login"}*/}
                </button>
            </div>
        );
    }
})

// export default connect(
//
//     ({user})=>(
//         {isLogin: user.isLogin, loading: user.loading, err: user.err}
//         ),
//     {
//         login:()=>({type:'LOGIN_SUCCESS'})
//     }
//
//     )(PageTwo);
