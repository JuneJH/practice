function render(vnode, container) {
    const node = createNode(vnode);
    container.appendChild(node)
    return node
}

function createNode(vnode) {
    let node = null;
    const { type } = vnode;
    if (typeof type === "string") {
        node = updateHostComponent(vnode);
    }else if(typeof type === "function"){
        node = type.isReactComponent? updateClassComponent(vnode) : updateFunctionComponent(vnode);
    }else{
        node =  updateFragment(vnode);
    }
    return node;
}
// 原生元素
function updateHostComponent(vnode) {
    const { type, props } = vnode;
    const { children } = props;
    const node = document.createElement(type);
    if (typeof children === "string") {
        createTextNode(children,node)
    } else {
        reconcileChildren(children, node)
    }
    updateNode(node,props)
    return node;
}
// 函数组件
function updateFunctionComponent(vnode){
    const {type,props} = vnode;
    const vvnode = type(props);
    return createNode(vvnode)
}
// 类组件
function updateClassComponent(vnode){
    const {type,props}=vnode;
    const instance = new type(props);
    const vvnode = instance.render();
    return createNode(vvnode);
}
// 片段
function updateFragment(vnode){
    const {  props } = vnode;
    const { children } = props;
    const node = document.createDocumentFragment();
    if (typeof children === "string") {
        createTextNode(children,node)
    } else {
        reconcileChildren(children, node)
    }
    return node;
}
// 更新原生元素属性
function updateNode(node,props){
    Object.keys(props).filter(key=>key!=="children").forEach(key=>{
        node[key]=props[key];
    })
}
function reconcileChildren(children, node) {
    if (Array.isArray(children)) {
        children.forEach(vnode => {
            if(typeof vnode === "string"){
                createTextNode(vnode,node)
            }else{
                render(vnode, node);
            }
        })
    } else {
        render(children, node);
    }
}



function createTextNode(text,node){
    const textNode = document.createTextNode(text);
    node.appendChild(textNode);
}
const ReactDom = {
    render
}
export default ReactDom;