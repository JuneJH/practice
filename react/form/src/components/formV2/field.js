import React from "react";
import {formContext} from "./formContext";

export default class Field extends React.Component{
    static contextType = formContext;
    componentDidMount(){
        this.unRegister = this.context.register(this);
    }
    componentWillUnmount(){
        this.unRegister && this.unRegister();
    }
    updateHandler=()=>{
        this.forceUpdate();
    }
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
        return React.cloneElement(this.props.children,this.enPropsHandle());
    }
}