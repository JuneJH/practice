import { FormProvider } from "./formContext";
import React, { useImperativeHandle } from "react";
import useForm from "./useForm";

/**
 * 自定义form
 * @param {*} param0 
 * @returns 
 */
function Form({ children, onFinish, onFinishFail, form }, ref) {
    const [formInstance] = useForm(form);
    useImperativeHandle(
        ref,
        () => {
            return formInstance;
        },
        [formInstance],
    )
    formInstance.setCallback({ onFinish, onFinishFail })
    return <form onSubmit={e => {
        e.preventDefault();
        formInstance.submit();
    }}>
        <FormProvider value={formInstance}>
            {children}
        </FormProvider>
    </form>
}

export default Form;