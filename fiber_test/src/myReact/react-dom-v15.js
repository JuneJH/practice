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
function reconcileChildren(parentNode, children) {
    if (typeof children === "string" || !children) {
        return;
    }
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        render(child, parentNode)
    }
}

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

 const ReactDOM = {render};
 export default ReactDOM;