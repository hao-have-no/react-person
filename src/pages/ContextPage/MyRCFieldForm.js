import React, {Component, useEffect} from "react";
// import Form, {Field} from "rc-field-form";
import Form, {Field} from '../../components/my-rc-field-form';
import Input from "../../components/my-rc-form/Input";
// import Input from "../components/Input";


//个人版(rc-field-form)要实现的需求点
// Form,Field,userForm

const nameRules = {required: true, message: "请输入姓名！"};
const passwordRules = {required: true, message: "请输入密码！"};

//高阶函数组件
// export default function MyRCFieldForm(props) {
//   const [form] = Form.useForm();
//
//   const onFinish = val => {
//     console.log("onFinish", val); //sy-log
//   };
//
//   // 表单校验失败执行
//   const onFinishFailed = val => {
//     console.log("onFinishFailed", val); //sy-log
//   };
//
//   useEffect(() => {
//     console.log("form", form); //sy-log
//     //form.setFieldsValue({username: "default"});
//   }, []);
//
//   return (
//     <div>
//       <h3>MyRCFieldForm</h3>
//       <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
//         <Field name="username" rules={[nameRules]}>
//           <Input placeholder="input UR Username" />
//         </Field>
//         <Field name="password" rules={[passwordRules]}>
//           <Input placeholder="input UR Password" />
//         </Field>
//         <button>Submit</button>
//       </Form>
//     </div>
//   );
// }

//类组件
export default class MyRCFieldForm extends Component{

  formRef = React.createRef();

  componentDidMount() {
    console.log("form",this.formRef.current);
    this.formRef.current.setFieldsValue({username:'12345'})
  }

  // const [form] = Form.useForm();
  onFinish = val => {
      console.log("onFinish", val); //sy-log
    };

    // 表单校验失败执行
   onFinishFailed = val => {
      console.log("onFinishFailed", val); //sy-log
    };

    // useEffect(() => {
    //   console.log("form", form); //sy-log
    //   //form.setFieldsValue({username: "default"});
    // }, []);

    render(){
    return (
        <div>
          <h3>MyRCFieldForm</h3>
          <Form ref={this.formRef} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
            <Field name="username" rules={[nameRules]}>
              <Input placeholder="input UR Username" />
            </Field>
            <Field name="password" rules={[passwordRules]}>
              <Input placeholder="input UR Password" />
            </Field>
            <button>Submit</button>
          </Form>
        </div>
    );
  }
}
