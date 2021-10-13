import React from "react";
import ctx from './context'



export default function connect(mapStateProps,mapDispatchProps){

    return function (Comp){
        return class C extends React.PureComponent{
            static contextType = ctx;
            constructor(props,ctx){
                super(props,ctx);
                this.store = ctx
                console.log(this.store)
                this.state = mapStateProps(this.store.getState())
                this.unListener = this.store.subscribe(()=>{
                    this.setState(mapStateProps(this.store.getState()))
                })
            }

            render(){
                const events = mapDispatchProps(this.store.dispatch)
                return (<Comp {...this.state} {...events}/>)
            }
        }
    }
}