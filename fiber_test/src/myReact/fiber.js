export function createFiber(vnode,returnFiber){
    const fiber = {
        type:vnode.type,
        // 标记了当前层级的唯一性
        key:vnode.key,
        props:vnode.props,
        // 第一个子节点
        child:null,
        //
        sibling:null,
        return:returnFiber,
        // 标记了当前层级下的位置
        index:0,
        // host dom 节点
        // class 实例 
        stateNode:null,
        // 标记fiber是干嘛的,插入，更新,删除
        flags:null,
        // 指向老节点
        alternate:null
    }
    return fiber;
}