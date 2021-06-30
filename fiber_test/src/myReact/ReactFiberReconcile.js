import { createFiber } from "./fiber";

export function updateHostComponent(wip) {
    // 更新节点自己
    if (!wip.stateNode) {
        wip.stateNode = createNode(wip)
    }
    // 协调子节点
    reconcileChildren(wip, wip.props.children);
} 



export function updateFuncitonComponent(wip) {
    // 更新节点自己
    // if (!wip.stateNode) {
    //     wip.stateNode = createNode(wip)
    // }

    // 协调子节点
    const {type,props} = wip;
    const children = type(props);
    reconcileChildren(wip,children);
} 

function render(vnode, container) {
    const node = createNode(vnode);
    container.appendChild(node);
}

function createNode(vnode) {
    const { type, props } = vnode;
    const node = document.createElement(type);
    updateNode(node, props);
    reconcileChildren(node, props.children);
    return node;
}

// 
// function reconcileChildren(parentNode, children) {
//     if (typeof children === "string" || !children) {
//         return;
//     }
//     for (let i = 0; i < children.length; i++) {
//         const child = children[i];
//         render(child, parentNode)
//     }
// }

function updateNode(node, nextVal) {
    Object.keys(nextVal).forEach(key => {
        if (key === "children") {
            if (typeof nextVal[key] === "string") {
                node.textContent = nextVal[key]
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

// 初次渲染，更新
function reconcileChildren(wip, children) {
    if (typeof children === "string") {
        return;
    }
    const newChildren = Array(children) ? children : [children];
    let previousNewFiber = null
    for (let i = 0; i < newChildren.length; i++) {
        const newChild = newChildren[i];
        const newFiber = createFiber(newChild, wip);
        if (previousNewFiber) {
            previousNewFiber.sibling = newFiber;
        } else {
            wip.child = newFiber;
        }
        previousNewFiber = newFiber;
    }
}