
// vnode 虚拟dom, node 真实dom

import {TEXT,PLACEMENT,UPDATE} from "./const";


//fiber
// {
//      type, //标记类型
//      props,//属性
//     child,//第一个子元素
//     sibling,// 兄弟节点
//     return, //父节点
//     node, // 当前节点的真实dom对象
//     base //储存旧的fiber
// }

//下一个单元任务
let nextUnitOfWork = null;

//当前的根节点 work in progress fiber
let wipRoot = null;

//全局设定工作时的fiber
let wipFiber = null; //子fiber,工作的fiber

//20200716 定义当前正在执行的wibRoot
let currentRoot = null;

// fiber就是一个vnode
//虚拟节点，container父节点
function render(vnode, container){
    //由于使用jsx语法，所以会以对象的形式生成dom树
    // console.log('vnode',vnode,container);

    //20200709 实现vnode-node,并进行挂载
    // //将vnode变为node
    // const node = createNode(vnode)
    // //container.append(node)
    // container.appendChild(node);

    //20200813 实现fiber,完成协调调用
    wipRoot={
        node: container,
        props: {
            children:[vnode]
        }
    }

    nextUnitOfWork = wipRoot;
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
    }
    // else if (typeof type === 'function'){
    //     //由于类组件和函数组件都是函数
    //     node = type.isReactComponent?  updateClassComponent(vnode) : updateFunctionComponent(vnode);
    // }
    else {
        // 源码当中没有创建节点，我这里简单处理了
        node = document.createDocumentFragment();
    }

    //20200709 递归children,生成节点并插入node节点中
    // reconcileChildren(props.children,node);

    //20200713  协调子节点，虚拟dom的diff的作用


    //递归props,将属性和文本赋予到node上
    updateNode(node,{},props);

    return node;

}

//2020713 执行fiber
function updateHostComponent(fiber){
    //需要真实的node节点
    if (!fiber.node){
        fiber.node = createNode(fiber);
    }

    //协调
    const {children} = fiber.props;
    //传入父节点和子节点，生成链表结构
    reconcileChildren(fiber,children);

    // console.log("fiber----", fiber); //sy-log
}


//2020713  commit之前 先进行执行任务的渲染
function performUnitOfWork(fiber){
    //1．执行当前任务

    // 1. 执行当前任务
    const {type} = fiber;
    if (typeof type === "function") {
        type.isReactComponent
            ? updateClassComponent(fiber)
            : updateFunctionComponent(fiber);
    } else {
        updateHostComponent(fiber);
    }

    // console.log('fiber1',fiber);
    //
    // updateHostComponent(fiber);


    //2.返回下一个单元任务
    if (fiber.child){
        return fiber.child
    }

    //没有子元素，寻找兄弟
    let nextFiber = fiber;
    while(nextFiber){
        if (nextFiber.sibling){
            return nextFiber.sibling;
        }else{
            //如果没有兄弟节点,返回父节点
            nextFiber = nextFiber.return;
        }
    }
}

//递归children

//20200709 处理子节点
// function reconcileChildren(children,node){
//     for (let i =0;i<children.length;i++){
//         let child = children[i]
//         //child是虚拟dom节点，需要变为真正的节点并插入node中
//         //render函数执行
//
//         //判断传入值是否为数组
//         if (Array.isArray(child)){
//             for (let i in child){
//                 render(child[i],node);
//             }
//         }else{
//             render(child,node);
//         }
//     }
// }

//20200713 协调子节点(指fiber),虚拟dom提交的,比较fiber，才会进行更新
//old 1,2,3
// new 2,3,4
//目前不考虑更新
//20200717 进行位置的确认，进一步提高更新效率
function reconcileChildren(workInProgressFiber,children){
    let preSibling = null;

    //获取旧的节点,从头开始比较
    let oldFiber = workInProgressFiber.base && workInProgressFiber.base.child;

    for (let i=0;i<children.length;i++){
        let child = children[i];
        
        //20200716--hooks介入
        let newFiber = null;

        //比较fiber组件是够能复用
        //比较新旧fiber
        let sameType = child && oldFiber && child.type === oldFiber.type;

        //类型相同，复用
        if (sameType){
            newFiber={
                type:child.type,
                props:child.props,
                node: oldFiber.node , //复用旧的
                base:oldFiber,
                return:workInProgressFiber,
                effectTag:UPDATE
            }
        }

        //类型不痛，但是child存在,新增
        if (!sameType&&child){
            newFiber={
                type:child.type,
                props:child.props,
                node:null,
                base:null,
                return:workInProgressFiber,
                effectTag:PLACEMENT
            }
        }

        if (!sameType&&oldFiber){
            //删除
        }


        //丰富fiber节点结构
        newFiber = {
            type: child.type,
            props: child.props,
            node:null,
            base:null,
            return: workInProgressFiber,
            effectTag: PLACEMENT
        };
        
        if (oldFiber){
            //存在旧的fiber，游标移动，准备下次判断
            oldFiber = oldFiber.sibling;
        }

        //判断是否是第一个节点，来辨别child,sibling
        if ( i === 0) {
            workInProgressFiber.child = newFiber;
        } else {
            //上一次fiber的sibling指向这一次的fiber
            preSibling.sibling = newFiber;
        }

        //暂存fiber,用作下次比较
        preSibling = newFiber;

    }
}

//20200709 处理类组件
// function updateClassComponent(vnode){
//     const {type,props} = vnode;
//     const cmp =new type(props);//new方法，实例化类组件
//     const vvnode = cmp.render()//执行组件内的render方法，生成vnode
//     const node = createNode(vvnode);//主要为生成node,从而挂在到节点上
//     return node;
// }

//20200713 fiber 处理类组件
function updateClassComponent(fiber){
    const {type,props} = fiber;
    const cmp =new type(props);//new方法，实例化类组件
    const children =[cmp.render()] //执行组件内的render方法，生成vnode
    // const children = createNode(vvnode);//主要为生成node,从而挂在到节点上
    reconcileChildren(fiber, children);
}

//20200713 fiber 函数组件
//20200715 无论是初始化还是更新，一定会调用这个函数,对于hook的初始化可以放在这
function updateFunctionComponent(fiber) {
    //当前工作的fiber就是这个fiber
    wipFiber = fiber;
    //!源码中是对象链表
    wipFiber.hooks = [];
    //因为会有很多hook任务，useState,useReducer,useEffect...
    wipFiber.hookIndex = 0;//hook执行任务下标

    const {type, props} = fiber;
    const children = [type(props)];
    reconcileChildren(fiber, children);
}

//20200709 函数组件
// function updateFunctionComponent(vnode){
//     //执行函数,但是生成的是vnode,需要进行转化
//     const {type,props} = vnode;
//     const vvnode = type(props); //执行函数，最后还是生成vnode,需要转为node
//     const node = createNode(vvnode);//主要为生成node,从而挂在到节点上
//     return node;
// }

//20200709 赋予属性，文本内容，事件处理
function updateNode(node,prevVal,nextVal){

    //增加对on事件的解析，并提供事件解绑方案

    Object.keys(prevVal)
        .filter(k => k !== "children")
        .forEach(key => {
            if (key.slice(0, 2) === "on") {
                let eventName = key.slice(2).toLowerCase();
                node.removeEventListener(eventName, prevVal[key]);
            } else {
                if (!(key in nextVal)) {
                    node[key] = "";
                }
            }
        });

    Object.keys(nextVal).filter(k=>k !== 'children').forEach(key=>{
        //过滤key,将nodeValue等参数挂载上去
        // console.log('updateNode',node,nextVal,key)
        //nextVal就是各种子类的值，比如文本节点的值，class的值,onclick的值
        //增加对事件的处理
        if (key.slice(0,2) === 'on'){
            let eventName = key.slice(2).toLowerCase();
            node.addEventListener(eventName,nextVal[key])
        }else{
            node[key] = nextVal[key];
        }
    })
}

//2020713 浏览器函数排队
function workLoop(deadline){
    //有下一个任务，并且当前帧还未结束
    while(nextUnitOfWork && deadline.timeRemaining() > 1){
        //执行当前任务，并返回下一个任务
         nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    }

    if (!nextUnitOfWork&&wipRoot){
        //直接提交操作 commit
        commitRoot();
    }

    requestIdleCallback(workLoop);
}

//提交
function commitRoot(){
    commitWorker(wipRoot.child);

    currentRoot = wipRoot;
    // 因为这里处于循环，提交完之后就要设置为null，
    // 否则会一直提交（详情看commitWorker方法）
    wipRoot = null; //置空
}

//提交执行work,挂载节点
function commitWorker(fiber){
    if (!fiber){
        return;
    }

    let parentNodeFiber = fiber.return;

    // 向上查找有node的(祖)父级别，因为有的fiber没有node节点，如Provider、Consumer等
    while (!parentNodeFiber.node) {
        parentNodeFiber = parentNodeFiber.return;
    }

    const parentNode = parentNodeFiber.node;
    if (fiber.effectTag === PLACEMENT && fiber.node !== null) {
        parentNode.appendChild(fiber.node);
    }

    //子节点和兄弟节点重复过程，进行挂载
    commitWorker(fiber.child);
    commitWorker(fiber.sibling);
}

//2020713 浏览器函数排队
requestIdleCallback(workLoop);



//20200715 -- 自定义实现useState
export function useState(init) {
    //寻找当前正在更新的fiber
    //base 是前一次的fiber(oldFiber)
    //reconcileChildren有对应的声明

    const oldHook = wipFiber.base&&wipFiber.base.hooks[wipFiber.hookIndex];

    //需要判断是否是初始化
    const hook = oldHook?{
        state:oldHook.state,
        queue:oldHook.queue
    }:{
        state:init,
        queue:[] //队列：因为setState可以批量处理
    }

    console.log('oldHook',oldHook,hook,init);

    // hook.queue 模拟批量更新
    //可以传递多个值
    hook.queue.forEach(action=>(hook.state = action));

    console.log('hook',hook);

    const setState = action=>{

        console.log('action'.action);

        hook.queue.push(action);
        // wipRoot挂载到fiber上
        wipRoot = {
            node:currentRoot.node,
            props: currentRoot.props,
            base:currentRoot
        };
        //setState　会更新页面　所以需要在这赋值任务，执行任务的渲染
        nextUnitOfWork  = wipRoot;
        console.log('omg',nextUnitOfWork);
    };

    wipFiber.hooks.push(hook); //将当前的hook放进根节点

    wipFiber.hookIndex++;

    //缓存并更新至fiber,但是更新的时候会比较新旧值是否变化来决定页面更新

    console.log('wipFiber',wipFiber,currentRoot);

    return [hook.state,setState];
}

export default {render};
