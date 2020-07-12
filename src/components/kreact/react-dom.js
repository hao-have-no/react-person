
// vnode 虚拟dom, node 真实dom

import {TEXT} from "./const";

//虚拟节点，container父节点
function render(vnode, container){
    //由于使用jsx语法，所以会以对象的形式生成dom树
    // console.log('vnode',vnode,container);

    //将vnode变为node
    const node = createNode(vnode)

    //container.append(node)
    container.append(node);
}

//根据传入的vnode,变为node并返回
function createNode(vnode){
    //节点生成后element
    //来自于createElement,因为createElement是对象类型的dom树{type,props:{config,children}}
    const {type,props} = vnode;
    let node;

    // console.log('type',type,vnode);

    //判断节点类型并创建
    if (type === TEXT){
        node = document.createTextNode('');
    }else if (typeof type === 'string') {
        node = document.createElement(type);
    }else if (typeof type === 'function'){
        //由于类组件和函数组件都是函数
        node = type.isReactComponent?  updateClassComponent(vnode) : updateFunctionComponent(vnode);
    }

    //递归children,生成节点并插入node节点中
    reconcileChildren(props.children,node);

    //递归props,将属性和文本赋予到node上
    updateNode(node,props);

    return node;

}


//递归children
function reconcileChildren(children,node){
    for (let i =0;i<children.length;i++){
        let child = children[i]
        //child是虚拟dom节点，需要变为真正的节点并插入node中
        //render函数执行
        render(child,node);
    }
}

//处理类组件
function updateClassComponent(vnode){
    const {type,props} = vnode;
    const cmp =new type(props);//new方法，实例化类组件
    const vvnode = cmp.render()//执行组件内的render方法，生成vnode
    const node = createNode(vvnode);//主要为生成node,从而挂在到节点上
    return node;
}

//函数组件
function updateFunctionComponent(vnode){
    //执行函数,但是生成的是vnode,需要进行转化
    const {type,props} = vnode;
    const vvnode = type(props); //执行函数，最后还是生成vnode,需要转为node
    const node = createNode(vvnode);//主要为生成node,从而挂在到节点上
    return node;
}

//赋予属性，文本内容，事件处理
function updateNode(node,nextVal){

    Object.keys(nextVal).filter(k=>k !== 'children').forEach(key=>{
        //过滤key,将nodeValue等参数挂载上去
        // console.log('updateNode',node,nextVal,key)
        //nextVal就是各种子类的值，比如文本节点的值，class的值,onclick的值
        node[key] = nextVal[key];
    })
}

export default {render};