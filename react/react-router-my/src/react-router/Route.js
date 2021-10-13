import React, { Component } from 'react'
import { matchPath } from './matchRouter';
import context from './context'

export default class Route extends Component {
    componentDidMount(){
        console.log("route 组件挂载")
    }
    componentWillUnmount(){
        console.log("route 组件卸载")
    }

    renderChildren(ctx) {
        if(this.props.children){
            if(typeof this.props.children === "function"){
                this.props.children(ctx);
            }else{
                return this.props.children
            }
        }
        if(!ctx.match){
            return null;
        }
        if(typeof this.props.render === "function"){
            return this.props.render(ctx);
        }
        if(this.props.component){
            const Component = this.props.component
            return <Component {...ctx}/>
        }
     }
    consumer = ({ history, location, match }) => {
        const newCtx = {
            history,
            location,
            match: this.createMatch(location)
        }
        return <context.Provider value={newCtx}>
            {this.renderChildren(newCtx)}
        </context.Provider>

    }
    createMatch(location) {
        const { exact = false, strict = false, sensitive = false } = this.props;
        const match = matchPath(this.props.path || "/", location.pathname, { exact, strict, sensitive })
        return match
    }
    render() {
        return (
            <context.Consumer>
                {this.consumer}
            </context.Consumer>
        )
    }
}
