import React from 'react';
import useForm from './useForm';
import FieldContext from './FieldContext'

//组件复合
//高阶组件定义：本身是一个function,返回的是一个新的组件
function Form({form,children,onFinish,onFinishFailed},ref){

    const [FormInstance] = useForm();

    //通过useImperativeHandle,将实例全部附加到ref上
    //React.forwardRef 会创建一个React组件，这个组件能够将其接受的 ref 属性转发到其组件树下的另一个组件中。

    React.useImperativeHandle(ref, () => FormInstance);

    // useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值。

    FormInstance.setCallback({
        onFinish,
        onFinishFailed
    });

    //这样所有的field和子组件都访问到Field的状态了
        return(
            <form
            onSubmit={e => {
                e.preventDefault();
                FormInstance.submit();
                }
            }
            >
                <FieldContext.Provider value={FormInstance}>
                    { children }
                </FieldContext.Provider>
            </form>
        )
}

export default Form;
