import { createContext } from "react";

// 创建上下文
const formContext = createContext();
const FormProvider = formContext.Provider;
const FormConsumer = formContext.Consumer;
export {
    formContext,
    FormProvider,
    FormConsumer
}