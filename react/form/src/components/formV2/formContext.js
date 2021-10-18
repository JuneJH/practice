import { createContext } from "react";

const formContext = createContext();
const FormProvider = formContext.Provider;
const FormConsumer = formContext.Consumer;
export {
    formContext,
    FormProvider,
    FormConsumer
}