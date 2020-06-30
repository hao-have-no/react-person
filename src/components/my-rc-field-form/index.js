import React from 'react';
import _Form from './Form';
import Field from './Field.js';
import useForm from './useForm';

// 函数组件
// const Form =  _Form;
//类组件，声明ref实例包裹form组件实例
const Form = React.forwardRef( _Form);
Form.Field = Field;
Form.useForm = useForm;

export { Field, useForm};
export default Form;
