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

function proxy(vm){
    Object.keys(vm.$data).forEach(key=>{
        Object.defineProperty(vm,key,{
            get(){
                return vm.$data[key]
            },
            set(newVal){
                vm.$data[key] = newVal;
            }
        })
    })
}
class JVue{
    constructor(options){
        this.$options = options;
        this.$data = typeof options.data === "function" ? options.data():options.data;
        observe(this.$data)
        proxy(this)

    }
}