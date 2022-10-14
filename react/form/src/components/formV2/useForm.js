import { useRef } from "react";

class FormStore {
    constructor() {
        this.store = {};
    }
    setField= (obj)=>{
        this.store = {
            ...this.store,
            ...obj
        }
        console.log(this.store)
    }
    getField=(name)=>{
        return this.store[name]
    }
    getForm=()=>{
        return this.store;
    }
}
// 创建自定义hooks
export default function useForm() {
    const storeInstance = useRef();
    if (!storeInstance.current) {
        storeInstance.current = new FormStore();
    }
    return [storeInstance.current]
}