import React, {Component} from 'react';
import context from "./context"
import {parsePath} from "history";
class Link extends Component {

    jump=({history})=>{
        const {to,...reset} = this.props;
        let loc;
        if(typeof  to === "object"){
            loc = to;
        }
        else{
            loc = parsePath(to);
        }
        const href = history.createHref(loc);
        return (<a {...reset} href={href} onClick={(e)=>{
            e.preventDefault();
            history.push(loc)
        }}>{this.props.children}</a>);
    }
    render() {
        return (
            <context.Consumer>
                {value=>this.jump(value)}
            </context.Consumer>
        );
    }
}

export default Link;