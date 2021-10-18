import React from "react";
import {formContext} from "./formContext";

export default class Field extends React.Component{
    static contextType = formContext;
    enPropsHandle = ()=>{
        const {getField,setField} = this.context || {};
        const {name} = this.props;
        return {
            value:getField(name),
            onChange:(e)=>{
                setField({
                    [name]:e.target.value
                })
            }
        }
    }
    render(){
        const {children} = this.props;
        console.log("run")
        return React.cloneElement(children,this.enPropsHandle());
    }
}