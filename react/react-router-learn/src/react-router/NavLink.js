import React from "react";
import context from "./context"
import {parsePath} from "history";
import {matchPath} from "./matchRouter";
import Link from "./Link";
export default function NavLink(props) {
    const {
        activeClassName = "active",
        exact = false,
        strict = false,
        sensitive = false,
        to="/",
        ...reset
    } = props
    return (
        <context.Consumer>
            {({location})=>{

                let loc;
                if(typeof  to === "string"){
                    loc = parsePath(to);
                }
                const result = matchPath(loc.pathname,location.pathname,{exact,strict,sensitive});
                if(result){
                    return <Link {...props} className={activeClassName}/>
                }else{
                    return  <Link {...props}/>
                }
            }}
        </context.Consumer>
    )
}