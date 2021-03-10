import React, { Component } from 'react'
import Route from './Route';
import context from './context';
import {matchPath} from './matchRouter'

export default class Switch extends Component {
    dealParams() {
        const children = [];
        if (Array.isArray(this.props.children)) {
            children.push(...this.props.children);
        } else if (children) {
            children.push(children)
        }
        return children;
    }
    getMatchChild=({ location }) =>{
        const children = this.dealParams();
        for (const child of children) {
            if (child.type === Route) {
                const {path="/", exact = false, strict = false, sensitive = false } = child.props;
                const match = matchPath(path, location.pathname, { exact, strict, sensitive })
                if(match){
                    return child;
                }
            }
            else {
                throw new Error("Switch must Route")
            }

        }

        return null;
    }

    render() {
        return <context.Consumer>
            {this.getMatchChild}
        </context.Consumer>
    }
}
