function render(vnode, container) {
    wipRoot = {
        stateNode: container,
        props: { children: vnode },
    }
    nextUnitofWork = wipRoot;
    console.log("====", wipRoot)
}

function createNode(workInProgress) {
    let node = null;
    const { type } = workInProgress;
    if (typeof type === "string") {
        node = document.createElement(type);
    }
    updateNode(node, workInProgress.props)
    return node;
}
// 原生元素
function updateHostComponent(workInProgress) {
    const { type } = workInProgress;
    if (!workInProgress.stateNode) {
        workInProgress.stateNode = createNode(workInProgress);
    }
    reconcileChildren(workInProgress, workInProgress.props.children);
}
// 函数组件
function updateFunctionComponent(workInProgress) {
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
// 片段
function updateFragment(vnode) {
    const { props } = vnode;
    const { children } = props;
    const node = document.createDocumentFragment();
    if (typeof children === "string") {
        createTextNode(children, node)
    } else {
        reconcileChildren(children, node)
    }
    return node;
}
// 更新原生元素属性
function updateNode(node, props) {
    Object.keys(props).forEach(key => {
        if (key === "children") {
            if (typeof props[key] === "string") {
                const text = document.createTextNode(props[key]);
                node.appendChild(text);
            }
        } else {
            node[key] = props[key];
        }
    })
}
function reconcileChildren(workInProgress, children) {
    if (!workInProgress.props || typeof workInProgress.props.children === "string") {
        return;
    }
    const newChildren = Array.isArray(children) ? children : [children];
    let preFiber = null;
    newChildren.forEach((child, index) => {
        const newFiber = {
            child: null,
            sibling: null,
            return: workInProgress,
            type: child.type,
            props: child.props
        };

        if (index === 0) {
            workInProgress.child = newFiber;
        } else {
            preFiber.sibling = newFiber;
        }
        preFiber = newFiber;

        return newFiber;
    })

}

function createTextNode(text, node) {
    const textNode = document.createTextNode(text);
    node.appendChild(textNode);
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
}

function commitRoot() {
    commitWork(wipRoot.child);
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
    if (workInProgress.stateNode) {
        prevStateNode.appendChild(workInProgress.stateNode)
    }


    commitWork(workInProgress.child);
    commitWork(workInProgress.sibling);

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



const ReactDom = {
    render
}
export default ReactDom;