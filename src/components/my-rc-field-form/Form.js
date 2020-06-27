import React from 'react';
import useForm from './useForm';
import FieldContext from './FieldContext'

//组件复合
//高阶组件定义：本身是一个function,返回的是一个新的组件
function Form({children}){

    const [FormInstance] = useForm();

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