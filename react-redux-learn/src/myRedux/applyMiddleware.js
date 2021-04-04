export default function applyMiddleware(...middlewares){
    return function (createStore){
        return function (reduce,defauleState){
            const store = createStore(reduce,defauleState);
            let dispatch = ()=>{throw new Error("目前还不能使用dispatch")};
            const simpleStore = {
                getState:store.getState,
                dispatch:store.dispatch
            }
            const dispathchFuncs = middlewares.map(func=>func(simpleStore));
            dispatch = compose(...dispathchFuncs)(store.dispatch);
            return {
                ...store,
                dispatch
            }
        }
    }

}

function compose(...fn){
    if(fn.length === 0 ){
        return args=>args;
    }else if(fn.length === 1){
        return fn[0];
    }
    // return fn.reduce((a, b) => (...args) => a(b(...args)))

    return function (...args){
        let lastParams = null;
        for(let i = fn.length - 1; i >= 0; i --){
            const func = fn[i];
            if(i == fn.length - 1){
                lastParams = func(...args);
            }else{
                lastParams = func(lastParams);
            }
        }
        return lastParams;
    }
}