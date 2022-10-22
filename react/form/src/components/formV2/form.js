import { FormProvider } from "./formContext";
import React from "react";
import useForm from "./useForm";

/**
 * 自定义form
 * @param {*} param0 
 * @returns 
 */
function Form({children}) {
    const [formInstance] = useForm();
    return <form onSubmit={e=>{
        e.preventDefault();
        console.log(formInstance.getForm())
    }}>
        <FormProvider value={formInstance}>
            {children}
        </FormProvider>
    </form>
}

export default Form;