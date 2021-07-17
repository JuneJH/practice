import { updateHostComponent, updateFuncitonComponent, updateNode } from './ReactFiberReconcile'

let wipRoot = null; // 标记根节点
let nextUnitofWork = null;  // 记录下一个需要转换的
// 初始化
export function scheduleUpdateOnFiber(fiber) {

    fiber.alternate = { ...fiber }
    wipRoot = fiber;
    wipRoot.sibling = null;
    nextUnitofWork = wipRoot;
}
requestIdleCallback(workLoop)
function workLoop(IdleDeadline) {
    while (nextUnitofWork && IdleDeadline.timeRemaining() > 0) {
        nextUnitofWork = performUnitOfwork(nextUnitofWork);
    }

    requestIdleCallback(workLoop)

    if (!nextUnitofWork && wipRoot) {
        commitRoot();
    }
}
function performUnitOfwork(workInProgress) {
    // 1. 更新当前任务
    const { type } = workInProgress;
    if (typeof type === "string") {
        updateHostComponent(workInProgress);
    } else if (typeof type === "function") {
        updateFuncitonComponent(workInProgress)
    }
    // 返回下一个任务 深度优先
    if (workInProgress.child) {
        return workInProgress.child;
    }
    let next = workInProgress;
    while (next) {
        if (next.sibling) {
            return next.sibling;
        }
        next = next.return;
    }
    return null;
}
// 提交
function commitRoot() {
    if(typeof wipRoot === "function"){
        commitWorker(wipRoot)
    }else{
        commitWorker(wipRoot.child);
    }
 
    wipRoot = null;
}
function commitWorker(wip) {
    if (!wip) return;
    //1.更新自己
    const { flags,stateNode } = wip;
    let parentNode = getParentNode(wip.return);
    if (flags ===null && stateNode) {
        parentNode.appendChild(stateNode)
    }
    if (flags ==="update" && stateNode) {
        updateNode(stateNode,wip.props)
    }
    // 2. 更新子节点
    commitWorker(wip.child)
    // 3. 更新兄弟
    commitWorker(wip.sibling)
}
function getParentNode(wip) {
    let temp = wip;
    while (temp) {
        if (temp.stateNode) {
            return temp.stateNode;
        }
        temp = temp.return;
    }
}
