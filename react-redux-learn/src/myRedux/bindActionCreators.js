export default function (createActions,dispatch){
    if(typeof createActions === "function"){
        return autoDispath(createActions,dispatch);
    }else if(typeof createActions === "object"){
        const result = {};
        for (const key in createActions) {
            if (Object.hasOwnProperty.call(createActions, key)) {
                const element = createActions[key];
                result[key] = autoDispath(element,dispatch);
            }
        }
        return result;
    }
    throw Error("actions must be function or object")
}

function autoDispath(createAction,dispatch){
    return function (...args){
        dispatch(createAction(...args));
    }
}