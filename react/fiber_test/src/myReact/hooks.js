import { scheduleUpdateOnFiber } from "./ReactFiberWorkLoop";

let currentRenderingFiber = null;
//当前工作的hook
let wip = null;

export function renderHooks(wipParams) {
    currentRenderingFiber = wipParams;
    currentRenderingFiber.memoizedState = null;
    wip = null;
}

function updateWip() {

    let hook;
    const current = currentRenderingFiber.alternate;
    if (current) {
        // 更新阶段
        currentRenderingFiber.memoizedState = current.memoizedState;
        if (wip) {
            hook = wip = wip.next;
        } else {
            hook = wip = current.memoizedState
        }

    } else {
        // 初次渲染
        hook = {
            memoizedState: null,
            next: null
        }
        if (wip) {
            wip = wip.next = hook;
        } else {
            wip = currentRenderingFiber.memoizedState = hook;
        }
    }


    return hook;
}

export function useReducer(reducer, initalState) {
    const hook = updateWip();
    // 初次渲染
    if(!currentRenderingFiber.alternate){
        hook.memoizedState = initalState;
    }
    const dispatch = (action) => {
        // 计算状态值
        hook.memoizedState = reducer(hook.memoizedState,action);
        scheduleUpdateOnFiber(currentRenderingFiber); 

    }
    return [hook.memoizedState, dispatch]
}