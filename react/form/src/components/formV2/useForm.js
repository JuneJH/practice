import { useRef } from "react";

class FormStore {
    constructor() {
        // 表单原数据
        this.store = {};
        // dom操作对象
        this.reactDoms = [];

        this.callbacks = {};
    }

    setCallback = (callback) => {
        this.callbacks = {
            ...this.callbacks,
            ...callback
        }
    }

    register = (reactDom) => {
        this.reactDoms.push(reactDom);

        return () => {
            this.reactDoms = this.reactDoms.filter(dom => dom !== reactDom);
        }
    }

    validate = () => {
        const err = [];
        
        for(let i = 0; i < this.reactDoms.length; i ++){
            const currentDom = this.reactDoms[i];
            const {name,rules=[]} = currentDom.props;
            rules.forEach(rule=>{
                if(rule?.require){
                    if(!this.store[name]){
                        err.push({
                            message:rule.message,
                            val:this.store[name]
                        })
                    }
                }
            })
        }

        return err;

    }
    setField = (obj) => {
        console.log("run setField",obj,this.reactDoms)

        const updateDom = Object.keys(obj).map(key => {
            const target = this.reactDoms.find(e => e?.props?.name === key);
            return target;
        }).filter(f=>f);
        this.store = {
            ...this.store,
            ...obj
        }
        updateDom.forEach(dom => dom?.updateHandler());
    }
    getField = (name) => {
        const val = this.store[name];
        return val || "";
    }
    submit = () => {
        const err = this.validate();
        const {onFinish,onFinishFail} = this.callbacks;
        if(err.length > 0){
            onFinishFail && onFinishFail(err,this.store);
        }else{
            onFinish && onFinish(this.store);
        }
    }
    getForm = () => {
        return {
            getField: this.getField,
            setField: this.setField,
            register: this.register,
            submit: this.submit,
            setCallback: this.setCallback
        };
    }
}
// 创建自定义hooks
export default function useForm(form) {
    const storeInstance = useRef();
    if(form){
        storeInstance.current = form;
    }
    if (!storeInstance.current) {
        storeInstance.current = new FormStore().getForm();
    }
    return [storeInstance.current]
}