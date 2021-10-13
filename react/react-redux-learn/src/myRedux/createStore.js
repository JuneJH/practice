// 实现createStore
// 1. dispatch
// 2. getState
// 3. subscribe

import { isPlainObject, random } from "./tools";



export default function (reducer,defaultState){
    let state = defaultState;
    let listeners = [];
    function dispatch(action){
        if(!isPlainObject(action)){
            throw Error("action must be plain object")
        }
        if(action.type === undefined){
            throw Error("action must be a property of type")
        }
        state = reducer(state,action);
        listeners.forEach(fn=>fn());
        
    }

    function getState(){
        return state;
    }
    function subscribe(listener){
        listeners.push(listener);
        return function (){
            listeners = listeners.map(fn=>fn !== listener);
        }
    }

    dispatch({type:`@@redux/INIT.${random(6)}`})

    return {
        dispatch,
        getState,
        subscribe,
    }
}