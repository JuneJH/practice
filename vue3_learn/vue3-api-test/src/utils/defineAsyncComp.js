import { defineAsyncComponent } from "@vue/runtime-core";
import { h } from "@vue/runtime-dom";
export function getAsyncComp(path){
    return defineAsyncComponent({
        loader:async()=>{
            await new Promise(reo=>{
                setTimeout(()=>{
                    reo();
                },2000)
            })
            const comp = import(path);
            return comp
        },
        loadingComponent:{render(){return h("div","loading...")}},
        errorComponent:{render(){return h("div","error")}}
    })

}