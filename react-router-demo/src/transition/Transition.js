import React from 'react'
import { Route } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';

export default function Transition(props) {
    const dom = React.useRef(null);
    const {component:Component,...rest} = props;

    return (
       <Route {...rest}>
           {({match})=>{
               return <CSSTransition
               in={match ? true:false}
               timeout = {500}
               nodeRef={dom}
               classNames={{
                   enter:"animate__animated animate__fast animate__zoomInDown",
                   exit:"animate__animated animate__fast animate__zoomOutDown"
               }}
               mountOnEnter={true}
               unmountOnExit={true}
               >
                   <Component ref={dom}/>
               </CSSTransition>
           }}
       </Route>
    )
}
