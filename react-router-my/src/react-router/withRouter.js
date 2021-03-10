import React from 'react';
import context from './context'
export default function withRouter(Comp) {

    function RouterWrapper(props){
        return (
            <context.Consumer>
                {(value)=><Comp {...value} {...props}/>}
            </context.Consumer>
        )
    }
    return RouterWrapper;
   
}
