import React, { Component } from 'react'
import Route from './Route';
import context from './context';
import { matchPath } from './matchRouter'

/**
 * 独占路由
 * 渲染与地址匹配的第一个子节点<Route/> 或者<Redirect/>
 * 遍历子节点，找到第一个匹配就结束
 */
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
    getMatchChild = ({ location }) => {
        // const children = this.dealParams();
        let matchP = null;
        let ele = null;
        React.Children.forEach(this.props.children, child => {
            if (child.type === Route && matchP == null) {
                const { path = "/", exact = false, strict = false, sensitive = false } = child.props;
                const match = matchPath(path, location.pathname, { exact, strict, sensitive });
                if (match) {
                    ele = child;
                    matchP = match
                }
            }
            else if (child.type !== Route) {
                throw new Error("Switch must Route")
            }
        })
        // for (const child of children) {
        //     if (child.type === Route) {
        //         const {path="/", exact = false, strict = false, sensitive = false } = child.props;
        //         const match = matchPath(path, location.pathname, { exact, strict, sensitive })
        //         if(match){
        //             return React.cloneElement(child,{computeRootMatch:match });
        //         }
        //     }
        //     else {
        //         throw new Error("Switch must Route")
        //     }

        // }

        return matchP ? React.cloneElement(ele, { computeRootMatch: matchP }) : null;
    }

    render() {
        return <context.Consumer>
            {this.getMatchChild}
        </context.Consumer>
    }
}
