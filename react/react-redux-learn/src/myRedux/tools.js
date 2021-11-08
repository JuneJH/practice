export function random(len){
    return Math.random().toString(36).slice(2,len).split("").join(".");
}

export function isPlainObject(obj){
    if(typeof obj !== "object"){
        return false;
    }
    return Object.getPrototypeOf(obj) === Object.prototype;
}

export function compose(...fn){
    if(fn.length === 0 ){
        return args=>args;
    }else if(fn.length === 1){
        return fn[0];
    }
    return fn.reduce((a, b) => (...args) => a(b(...args)))

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
