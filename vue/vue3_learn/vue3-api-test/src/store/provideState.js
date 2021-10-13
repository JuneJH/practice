import { reactive } from "@vue/reactivity";
import { inject, readonly } from "@vue/runtime-dom";
import { delay } from "./utils";
const key = Symbol();
export function initProvide(app){
    
    const state = reactive({
        provideUser:null,
        provideLoading:false,
    })
    const login = async ()=>{
        state.provideLoading = true;
        await delay(4000);
        state.provideUser = {name:"Mia",age: 18, info: "Provide 数据"};
        state.provideLoading = false;
    }
    const provideState = readonly(state)
    app.provide(key,{
        provideState,
        login
    })
}
export function useProvideState(defaultState = null){
    return inject(key,defaultState)
}

export function provideEnter(app){
    initProvide(app);
}