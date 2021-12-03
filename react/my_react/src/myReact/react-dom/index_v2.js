const ADD = "ADD";
const UPDATE = "UPDATE";
const DELETES = "DELETES";
let currentRoot = null;
let deletes = null;
function render(vnode, container) {
    wipRoot = {
        stateNode: container,
        props: { children: vnode },
    }
    nextUnitofWork = wipRoot;
    deletes = [];
}

function createNode(workInProgress) {
    let node = null;
    const { type } = workInProgress;
    if (typeof type === "string") {
        node = document.createElement(type);
    }
    updateNode(node, {},workInProgress.props)
    return node;
}
// 原生元素
function updateHostComponent(workInProgress) {

    if (!workInProgress.stateNode) {
        workInProgress.stateNode = createNode(workInProgress);
    }
    reconcileChildren(workInProgress, workInProgress.props.children);
}
// 函数组件
function updateFunctionComponent(workInProgress) {
    wipFiber = workInProgress;
    wipFiber.hooks = [];
    wipFiber.hookIndex = 0;
    const { type, props } = workInProgress;
    const children = type(props);
    reconcileChildren(workInProgress, children);
}
// 类组件
function updateClassComponent(workInProgress) {
    const { type, props } = workInProgress;
    const instance = new type(props);
    const children = instance.render();
    reconcileChildren(workInProgress, children);
}

// 更新原生元素属性
function updateNode(node, prevProps,props) {
    Object.keys(prevProps).forEach(key => {
        if (key === "children") {
            if (typeof prevProps[key] === "string") {
               node.innerHTML = "";
            }
        } else {
            if (key.includes("on")) {
                node.removeEventListener(key.slice(2).toLowerCase(), prevProps[key])
            } else {
                node[key] = "";
            }

        }
    })
    Object.keys(props).forEach(key => {
        if (key === "children") {
            if (typeof props[key] === "string") {
                const text = document.createTextNode(props[key]);
                node.appendChild(text);
            }
        } else {
            if (key.includes("on")) {
                node.addEventListener(key.slice(2).toLowerCase(), props[key])
            } else {
                node[key] = props[key];
            }

        }
    })
}
function reconcileChildren(workInProgress, children) {
    if (!workInProgress.props || typeof workInProgress.props.children === "string") {
        return;
    }
    let oldFiber = workInProgress.base && workInProgress.base.child;
    const newChildren = Array.isArray(children) ? children : [children];
    let preFiber = null;
    newChildren.forEach((child, index) => {
        const isSame = oldFiber && child && (oldFiber.type === child.type);
        let newFiber = null;
        if (isSame) {
            newFiber = {
                child: null,
                sibling: null,
                return: workInProgress,
                type: child.type,
                props: child.props,
                stateNode: oldFiber.stateNode,
                base:oldFiber,
                effectTag: UPDATE,
            };
        }
        if (!isSame && child) {
            newFiber = {
                child: null,
                sibling: null,
                return: workInProgress,
                type: child.type,
                props: child.props,
                effectTag: ADD,
            };
        }

        if(!isSame && oldFiber){
            oldFiber.effectTag = DELETES;
            deletes.push(oldFiber);
        }

        if(oldFiber){
            oldFiber = oldFiber.sibling;
        }


        if (index === 0) {
            workInProgress.child = newFiber;
        } else {
            preFiber.sibling = newFiber;
        }
        preFiber = newFiber;

        return newFiber;
    })

}
requestIdleCallback(workLoop)

let nextUnitofWork = null, wipRoot = null;
function workLoop(IdleDeadline) {
    while (nextUnitofWork && IdleDeadline.timeRemaining() > 0) {
        nextUnitofWork = performUnitOfwork(nextUnitofWork);
    }
    if (!nextUnitofWork && wipRoot) {
        commitRoot()
    }
    requestIdleCallback(workLoop)
}

function commitRoot() {
    deletes.forEach(commitWork)
    commitWork(wipRoot.child);
    currentRoot = wipRoot;
    wipRoot = null;
}

function commitWork(workInProgress) {
    if (!workInProgress) {
        return;
    }
    let prevWorkInProgress = workInProgress.return;
    while (!prevWorkInProgress.stateNode) {
        prevWorkInProgress = prevWorkInProgress.return;
    }
    const prevStateNode = prevWorkInProgress.stateNode;
    if (workInProgress.stateNode && workInProgress.effectTag === ADD) {
        prevStateNode.appendChild(workInProgress.stateNode)
    }else if(workInProgress.stateNode && workInProgress.effectTag === UPDATE){
        updateNode(workInProgress.stateNode,workInProgress.base.props,workInProgress.props);
    }else if(workInProgress.stateNode && workInProgress.effectTag === DELETES){
        commitDelete(workInProgress,prevStateNode);
    }
    commitWork(workInProgress.child);
    commitWork(workInProgress.sibling);
}
function commitDelete(workInProgress,prevStateNode){
    if(workInProgress.stateNode){
        prevStateNode.removeChild(workInProgress.stateNode);
    }else{
        commitDelete(workInProgress.child,prevStateNode)
    }
}
function performUnitOfwork(workInProgress) {
    const { type } = workInProgress;
    if (typeof type === "function") {
        type.isReactComponent ? updateClassComponent(workInProgress) : updateFunctionComponent(workInProgress);
    } else {
        updateHostComponent(workInProgress);
    }

    if (workInProgress.child) {
        return workInProgress.child;
    }
    let nextWorkInProgress = workInProgress;
    while (nextWorkInProgress) {
        if (nextWorkInProgress.sibling) {
            return nextWorkInProgress.sibling;
        }
        nextWorkInProgress = nextWorkInProgress.return;
    }
}


let wipFiber = null;

export const useState = (init) => {
    const oldHook = wipFiber.base && wipFiber.base.hooks[wipFiber.hookIndex];
    const hook = oldHook ? { ...oldHook } : { state: init, quequ: [] };
    hook.quequ.forEach(action => {
        hook.state = action;
    })
    const setState = (val) => {
        hook.quequ.push(val);
        wipRoot = {
            stateNode: currentRoot.stateNode,
            props: currentRoot.props,
            base: currentRoot
        }
        nextUnitofWork = wipRoot;
        deletes = [];
    }
    wipFiber.hooks.push(hook);
    wipFiber.hookIndex ++;
    return [hook.state, setState]
}

const ReactDom = {
    render
}
export default ReactDom;