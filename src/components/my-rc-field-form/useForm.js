import React, {useRef} from 'react';

//为什么要声明这个
// 1. 取整个表单实例进行校验的时候，使用到了Form.useForm
// 2. 用于记录所有的状态

//使用contxt,开始对整个组件数进行传递，状态共享
class FormStore {

    constructor(props) {
        this.store = {};
        this.fieldEntities = [];
        //将所有field实例注册，在调用时直接寻找对应的field并调用就可以
        this.calllbacks = {};
    }

    setCallback = callback => {
        this.calllbacks = {
            ...callback,
            ...this.calllbacks
        };
    };

    registerField=(field)=>{
        this.fieldEntities.push(field);
        return () => {
            this.fieldEntities = this.fieldEntities.filter(item => item != field);
            delete this.store[field.props.name];
        };
    }

    getFieldValue = name => {
        return this.store[name];
    };

    getFieldsValue = () => {
        return this.store
    };

    setFieldsValue = (newStore) => {
        console.log('newStore',newStore)
        this.store = {
            ...this.store,
            ...newStore
        }

        //store更新后，执行更新方法
        this.fieldEntities.forEach(entity=>{
            const {name} = entity.props;
            console.log('name',name);
            Object.keys(newStore).forEach(key => {
                if (key === name) {
                    entity.onStoreChange();
                }
            });
            // entity.onStoreUpdate();
        })

        //获取field并触发update
        console.log('store',this.store)
    };

    validate = () => {
        let err = [];
        // todo
        this.fieldEntities.forEach(entity => {
            const {name, rules} = entity.props;
            let value = this.store[name];
            let rule = rules && rules[0];
            if (rule && rule.required && (value === undefined || value === "")) {
                //  出错
                err.push({
                    [name]: rules.message,
                    value
                });
            }
        });
        return err;
    };

    submit = () => {
        let err = this.validate();
        if (err.length === 0) {
            this.calllbacks.onFinish(this.store);
        } else if (err.length > 0) {
            this.calllbacks.onFinishFailed(err);
        }
        // 成功
        // 失败
    };

    getForm = () => {
        return {
            //提供返回field值方法
            registerField:this.registerField,
            getFieldValue: this.getFieldValue,
            getFieldsValue: this.getFieldsValue,
            setFieldsValue: this.setFieldsValue
        }
    }
}

export default function useForm() {
    //拿到form的实例
    const formRef = useRef();
    //判断是否存在缓存，如果是直接调用并返回
    if (!formRef.current) {
        //没有的话，直接更新
        const formStore = new FormStore();
        //迭代器，提供get和set方法,获取整个store缓存结果
        formRef.current = formStore.getForm();
    }

    return [formRef.current];
}