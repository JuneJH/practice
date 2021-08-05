

function defineReactive(obj,key,val){
    observe(obj[key])
    Object.defineProperty(obj,key,{
        get(){
            console.log("geter!!!",key);
            return val;
        },
        set(newVal){
            if(newVal !== val){
                if(typeof val === "object"){
                    observe(newVal);
                }
                val = newVal;
                console.log("seter !!",key)
            }
        }
    })
}

function set(obj,key,val){
    defineReactive(obj,key,val);
}
function observe(obj){
    if(typeof obj !== "object" || obj === null)return;
    Object.keys(obj).forEach(key=>defineReactive(obj,key,obj[key]));
}

const obj = {
    name:"june",
    age:23,
    can:{
        one:"ok"
    }
}
observe(obj);
set(obj,"sex",0);
obj.can.one;
obj.can = {name:123}
obj.can.name;
