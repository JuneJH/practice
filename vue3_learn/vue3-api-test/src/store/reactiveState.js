import { reactive } from "@vue/reactivity";
import { readonly } from "@vue/runtime-dom";
import { delay } from "./utils";

const state = reactive({
    reactiveLading:false,
    reactiveUser:null
});

const stateReadonly = readonly(state);

export async function login (){
    state.reactiveLading = true;
    await delay(3000); 
    state.reactiveUser = {name:"july",age:12,info:"reactive 数据"};
    state.reactiveLading = false;
}

export const useState = ()=>stateReadonly;