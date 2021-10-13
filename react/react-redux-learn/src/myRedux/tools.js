export function random(len){
    return Math.random().toString(36).slice(2,len).split("").join(".");
}

export function isPlainObject(obj){
    if(typeof obj !== "object"){
        return false;
    }
    return Object.getPrototypeOf(obj) === Object.prototype;
}