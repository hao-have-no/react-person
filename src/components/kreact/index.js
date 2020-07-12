
//render调用，准备生成对应节点
//type:节点类型 config:节点配置  children:节点的子节点
function createElement(type,config,...children){

    let propName;

    console.log('element',type,config,...children);

   //删除jsx生成对象中不需要的本地元素
    if (config){
        //fragment节点没有config;fragment：主要用于mobile端，
        // 能够让程序更加合理和充分地利用大屏幕的空间，出现的初衷是为了适应大屏幕的平板电脑
        delete config.__self;
        delete config.__source;
    }

    //为了生成一个属性树，将所有需要的值所部放入props对象中
    const props = {
        ...config,
        // defaultProps,
        //遍历，整合成相同格式
        //主要是对文本节点进行特殊处理,文本节点不是对象类型的
        children:children.map(child=> typeof child === 'object'?child:createTextNode(child))
    };

    if (type && type.defaultProps) {
        const defaultProps = type.defaultProps;
        for (propName in defaultProps) {
            if (props[propName] === undefined) {
                props[propName] = defaultProps[propName];
            }
        }
    }



    //createElement 最终返回的是element,本质是对象
    return { type , props}
}

//创建文本节点,保持和标签元素节点一致的数据结构
function createTextNode(text){
    return{
        type: 'TEXT',
        props:{
            children:[],
            nodeValue:text
        }
    }
}

export  default  {createElement};