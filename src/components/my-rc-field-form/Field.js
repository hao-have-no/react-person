import React, {Component} from 'react';
import FieldContext from './FieldContext'

class Field extends Component {
    static contextType = FieldContext; //引入context,并通过useForm拿到了store
    //DidMount:只执行一次，将实例注入useForm.fieldEntities

    //有订阅，就需要有取消订阅
    //防止组件销毁后，订阅者还在工作，引发错误
    //可以在注册后，返回取消订阅函，取消时执行函数就行
    componentDidMount(){
        this.cancelRegister = this.context.registerField(this);
    }

    componentWillUnmount() {
        if (this.cancelRegister) {
            this.cancelRegister();
        }
    }

    //定义组件强制更新函数
    onStoreUpdate=()=>{
      this.forceUpdate();
    };

    getControled=()=>{
        const { setFieldsValue, getFieldValue } = this.context;
        //获得组件要取值的key,通过MyRcFieldForm中的声明，可以从props中取得传入的key
        const {name} = this.props;
          return{
              //版本进阶：将所有field和value放入到仓库中，取值验证直接从仓库里拿值
              value:getFieldValue(name), //从store中取
              onChange:e=>{
                  //将新值存到store中
                  const newVal= e.target.value;
                  setFieldsValue({[name]:newVal});
                  console.log('newValue',newVal);
              }
          }
    }

    render() {
        const {children} = this.props;
        //克隆元素，形成新的组件，具有onchange事件和相关属性
        return React.cloneElement(children, this.getControled());
    }
}

export default Field;
