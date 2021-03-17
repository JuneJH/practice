import reducer from "../redux/reducer";
import { isPlainObject, random } from "./tools";


function check(reducers){
    if(typeof reducers !== "object"){
        throw Error("reducers must be object")
    }
    if(!isPlainObject(reducers)){
        throw Error("reducers must be plain object")
    }

    for (const key in reducers) {
        if (Object.hasOwnProperty.call(reducers, key)) {
            const fn = reducers[key];
            const s1 = fn(undefined,{type:`@@INIT.${random(6)}`})
            if(typeof s1 === "undefined"){
                throw Error("reducers must be not return undefined")
            }
            const s2 = fn(undefined,{type:`@@UNKNOWN.${random(6)}`})
            if(typeof s2 === "undefined"){
                throw Error("reducers must be not return undefined")
            }
        }
    }
    return true;
}

export default function(reducers){
    check(reducers);

    return function (state={},action){
        const newState = {};
        for (const key in reducers) {
            if (Object.hasOwnProperty.call(reducers, key)) {
                const reducer = reducers[key];
                newState[key] = reducer(state[key],action) 
            }
        }
        return newState;
    }
}