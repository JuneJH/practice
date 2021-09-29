function  reactive(obj) {
    return new Proxy(obj,{
        get(target,key){
            track(target,key)
            if(typeof target[key] === "object"){
                return reactive(target[key]);
            }
            return target[key]
        },
        set(target,key,val){
            target[key] = val;
            trigger(target,key)
        },
        deleteProperty(target,key){
            delete target[key];
            trigger(target,key)
        },
    })
}

const effectStack = [];
function  effect(fn) {
    const e = createEffect(fn);
    e();
    return e;
}
function createEffect(fn) {
    const effect = function (){
        try{
            effectStack.push(effect);
            fn();
        }finally{
            effectStack.pop();
        }
    }  
    return effect;  
}
const targetMap = new WeakMap();
function  track(target,key) {
    const effect = effectStack[effectStack.length - 1];
    if(effect){
        let depMap = targetMap.get(target);
        if(!depMap){
            depMap = new Map();
            targetMap.set(target,depMap) 
        }
        let deps = depMap.get(key);
        if(!deps){
            deps = new Set();
            depMap.set(key,deps)
        }
        deps.add(effect)
    }
}

function  trigger(target,key) {
    const depMap = targetMap.get(target);
    if(depMap){
        const deps = depMap.get(key);
        if(deps){
            deps.forEach(fn=>fn())
        }
    }
}


// 测试
// const state = reactive({
//     name:"june",
//     age:12
// })
// effect(()=>{
//     console.log("获取姓名",state.name)
// })

// setTimeout(()=>{
//     state.name = "John"
//     console.log(state)
// },2000)