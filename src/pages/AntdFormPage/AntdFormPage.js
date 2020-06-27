// import React, {Component, useEffect} from 'react';
// import{ Form, Button, Input } from 'antd';
//
// const FormItem = Form.Item;
//
// const nameRules = {required: true, message: "请输入姓名！"};
// const passworRules = {required: true, message: "请输入密码！"};
//
// //function 组件(函数组件)
// // function AntdFormPage (props){
//
// //     // Form.useForm(); 自定义hook
// //     const [form] = Form.useForm();
// //
// //     const onFinish = val => {
// //         console.log("onFinish", val); //sy-log
// //     };
// //     const onFinishFailed = val => {
// //         console.log("onFinishFailed", val); //sy-log
// //     };
// //
// //     //useEffect(didUpdate);
// //     // 该 Hook 接收一个包含命令式、且可能有副作用代码的函数。
// //     // 赋值给 useEffect 的函数会在组件渲染到屏幕之后执行
// //     // 默认情况下，effect 将在每轮渲染结束后执行，但你可以选择让它 在只有某些值改变的时候 才执行。
// //     useEffect(()=>{
// //         //form 代表整个form表单的实例
// //       form.setFieldsValue({username:'default'});
// //       console.log(form);
// //     },[]);
// //
// //         return (
// //             <div>
// //                 <h4>AntdFormPage</h4>
// //                 <Form
// //                     form = {form}
// //                     onFinish={onFinish}
// //                     onFinishFailed={onFinishFailed}
// //                 >
// //                     <FormItem name="username" label="姓名" rules={[nameRules]}>
// //                         <Input placeholder="username placeholder" />
// //                     </FormItem>
// //                     <FormItem name="password" label="密码" rules={[passworRules]}>
// //                         <Input placeholder="password placeholder" />
// //                     </FormItem>
// //                     <FormItem>
// //                         <Button type="primary" size="large" htmlType="submit">
// //                             Submit
// //                         </Button>
// //                     </FormItem>
// //                 </Form>
// //             </div>
// //         );
// // }
//
//
// //class 类组件
// class AntdFormPage extends Component {
//     formRef = React.createRef(); //可以直接获得当前ref绑定的实例
//
//     componentDidMount() {
//         this.formRef.current.setFieldsValue({username: "defalut"});
//         //补充知识点：ref.content:创建ref,并且返回的是个对象，缓存在current中
//     }
//     onFinish = val => {
//         console.log("onFinish", val); //sy-log
//     };
//     onFinishFailed = val => {
//         console.log("onFinishFailed", val); //sy-log
//     };
//     render() {
//         return (
//             <div>
//                 <h3>AntdFormPage</h3>
//                 <Form
//                     ref={this.formRef}
//                     onFinish={this.onFinish}
//                     onFinishFailed={this.onFinishFailed}>
//                     <FormItem name="username" label="姓名" rules={[nameRules]}>
//                         <Input placeholder="username placeholder" />
//                     </FormItem>
//                     <FormItem name="password" label="密码" rules={[passworRules]}>
//                         <Input placeholder="password placeholder" />
//                     </FormItem>
//                     <FormItem>
//                         <Button type="primary" size="large" htmlType="submit">
//                             Submit
//                         </Button>
//                     </FormItem>
//                 </Form>
//             </div>
//         );
//     }
// }
//
// export default AntdFormPage;