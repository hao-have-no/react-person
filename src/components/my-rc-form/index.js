import {Component} from "react";
import React from "react";

export default function createForm(Cmp){

    return class extends Component{
        constructor(props){
            super(props);
            this.state={

            }
            this.options={

            }
        }

        handleChange= e =>{
            const {name,value} = e.target;
            this.setState({[name]:value})
        }

        getFieldDecorator= (field,option) => InputCmp =>{
            this.options[field] = option;
            return React.cloneElement(InputCmp,{
                name:field,
                value:this.state[field]||"", //存在state中
                onChange:this.handleChange
            });
        };

        setFieldsValue=newStore=>{
            this.setState(newStore);
        };

        getFieldsValue=()=>{
           return this.state;
        };

        //来自暗号：埃及的验证
        validateFields= callback =>{
            //校验规则 this.options
            //校验值: this.state

            let err = [];

            for (let field in this.options){
                //判断 state.field是不是undefined
                const {rules} = this.options[field];
                const value = this.state[field];
                let rule="";
                Object.keys(rules).map(item=>{
                    rule = rules[item];
                })
                console.log('field',value,rule);
                if (rule && rule.required && (value === undefined || value === "")) {
                //     //  出错
                    err.push({
                        [field]: rule.message,
                        value
                    });
                }
            }
            console.log(err);
            let that = this;

            if (err.length == 0){
                callback(null,'ok');
            }else{
                callback('err',err);
            }
        };

        getForm=()=>{
            return {
                form:{
                    getFieldDecorator:this.getFieldDecorator,
                    setFieldsValue:this.setFieldsValue,
                    getFieldsValue:this.getFieldsValue,
                    validateFields:this.validateFields
                }
            }
        };

        render(){
            return <Cmp {...this.props}{...this.getForm()}/>
        }
    }
}