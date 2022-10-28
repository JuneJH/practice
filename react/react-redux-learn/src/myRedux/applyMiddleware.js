import {compose} from "./tools";
/**
 * 使用中间件,增加dispatch能力
 * @param  {...any} middlewares 中间件列表
 * @returns redux
 */
export default function applyMiddleware(...middlewares){
    return function (createStore){
        return function (reduce,defauleState){
            const store = createStore(reduce,defauleState);
            let dispatch = ()=>{throw new Error("目前还不能使用dispatch")};
            const middleParams = {
                getState:store.getState,
                dispatch:action=>dispatch(action)
            }
            const dispathchFuncs = middlewares.map(func=>func(middleParams));
            // 聚合dispatch
            dispatch = compose(...dispathchFuncs)(store.dispatch);
            return {
                ...store,
                dispatch
            }
        }
    }
}
