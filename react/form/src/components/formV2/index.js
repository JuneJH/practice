import _Form from "./form";
import Field from "./field";
import useForm from "./useForm";
import React from "react";

// 转发ref
const Form = React.forwardRef(_Form);
Form.useForm = useForm;

export default Form;
export {
    Field
}