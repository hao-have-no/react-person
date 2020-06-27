import React, {Component} from 'react';
// import { createForm } from "rc-form";
import createForm from '../../components/my-rc-form/index'
import Input from '../../components/my-rc-form/Input'


const nameRules = {required: true, message: "请输入姓名！"};
const passworRules = {required: true, message: "请输入密码！"};

//进阶，不在组件中定义状态
//通过高阶函数，在声明的时候通过其他组件赋予当前组件状态
//略处：一个组件变化，整个高阶组件都在变化

@createForm
class MyRcForm extends Component {

    constructor(props){
        super(props);
        // this.state={
        //     userName:"",
        //     password:""
        // };
    }

    componentDidMount(){
        this.props.form.setFieldsValue({username:''})
    }

    submit=()=>{
        const { getFieldsValue,validateFields } = this.props.form;
        console.log('submit',getFieldsValue());
        validateFields((err,val)=>{
            if (err){
                console.log("err",val);
            }else{
                console.log("校验成功",val);
            }
        })
    }

    render() {
        // const {username,password} = this.state;
        const { getFieldDecorator } = this.props.form;
        console.log('props',this.props);
        return (
            <div>
               <h3>MyRcForm</h3>
                {getFieldDecorator("username",{rules:{nameRules}})(<Input placeholder="userName"/>)}
                {getFieldDecorator("password",{rules:{passworRules}})(<Input placeholder="passWord"/>)}

                {/*<Input placeholder="userName"*/}
                       {/*// value={username}*/}
                       {/*// onChange={e => this.setState({username:e.target.value})}*/}
                {/*/>*/}
                {/*<Input placeholder="passWord"*/}
                       {/*// value={password}*/}
                       {/*// onChange={e => this.setState({password:e.target.value})}*/}
                {/*/>*/}
                <button onClick={this.submit}>submit</button>
            </div>
        );
    }
}

export default MyRcForm;