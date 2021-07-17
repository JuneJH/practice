import { createFiber } from "./fiber";
import { renderHooks } from "./hooks";
// 处理原生节点
export function updateHostComponent(wip) {
    // 更新节点自己
    if (!wip.stateNode) {
        wip.stateNode = createNode(wip)
    }
    // 协调子节点
    reconcileChildren(wip, wip.props.children);
} 
// 处理函数组件
export function updateFuncitonComponent(wip) {
    // 更新节点自己
    // if (!wip.stateNode) {
    //     wip.stateNode = createNode(wip)
    // }
    renderHooks(wip);
    // 协调子节点
    const {type,props} = wip;
    const children = type(props);
    reconcileChildren(wip,children);
} 

// 创建真实dom
function createNode(vnode) {
    const { type, props } = vnode;
    const node = document.createElement(type);
    updateNode(node, props);
    return node;
}
// 更新属性
export function updateNode(node, nextVal) {
    Object.keys(nextVal).forEach(key => {
        if (key === "children") {
            if (typeof nextVal[key] === "string") {
                node.textContent = nextVal[key]
            }
            // 暂时解决字符串显示问题
            if(Array.isArray(nextVal[key])){
                let str = "";
                nextVal[key].forEach(item=>{
                    if (typeof item !== "object") {
                       str += item;
                    }
                })
                node.textContent = str;
            }
        } else if (typeof nextVal[key] === "object") {
            node[key] = transformStyle(nextVal[key])
        }
        else if (key.slice(0, 2) === "on") {
            const eventName = key.slice(2).toLocaleLowerCase();
            node.addEventListener(eventName, nextVal[key]);
        } else {
            node[key] = nextVal[key]
        }
    })
}
function transformStyle(obj) {
    let str = ""
    Object.keys(obj).forEach(key => {
        str += `${key}:${obj[key]};`
    })
    return str;
}

// 调和子节点
function reconcileChildren(wip, children) {
    if (typeof children === "string") {
        return;
    }
    const newChildren = Array.isArray(children) ? children : [children];
    let previousNewFiber = null;
    let oldFiber = wip.alternate && wip.alternate.child;
    for (let i = 0; i < newChildren.length; i++) {
        const newChild = newChildren[i];
        if(newChild === null){
            continue;
        }
        const newFiber = createFiber(newChild, wip);
        const same = sameNode(oldFiber,newFiber);
        if(same){
            Object.assign(newFiber,{
                alternate:oldFiber,
                stateNode:oldFiber.stateNode,
                flags:"update",
            })
        }
        // if(oldFiber){
        //     oldFiber = oldFiber.sibling;
        // }
        if (previousNewFiber) {
            previousNewFiber.sibling = newFiber;
        } else {
            wip.child = newFiber;
        }
        previousNewFiber = newFiber;
    }
}

function sameNode(a,b){
    return !!(a && b && (a.type === b.type) && (a.key === b.key));
}