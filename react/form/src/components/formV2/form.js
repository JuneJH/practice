import { FormProvider } from "./formContext";
import React from "react";
import useForm from "./useForm";

function Form({children}) {
    const [formInstance] = useForm();
    return <form>
        <FormProvider value={formInstance}>
            {children}
        </FormProvider>
    </form>
}

export default Form;