import React, { Component } from 'react'
import { matchPath } from './matchRouter';
import context from './context'

export default class Route extends Component {
    componentDidMount() {
        console.log("route 组件挂载")
    }
    componentWillUnmount() {
        console.log("route 组件卸载")
    }

    /**
     * 渲染组件优先级
     * children 》component  》  render
     * 没有匹配时且children为函数的情况需要渲染children
     * @param {*} ctx 
     * @returns 
     */
    renderChildren(ctx) {
        const { children, render, component } = this.props;
        const { match } = ctx;
        if (children) {
            if (typeof children === "function") {
                return children(ctx);
            } else if (match) {
                return children
            }
        }
        if (!match) {
            return null;
        }
        if (component) {
            return React.createElement(component, ctx);
        }
        if (typeof render === "function") {
            return render(ctx);
        }
    }
    renderChildrenW(ctx) {
        const { children, render, component } = this.props;
        const { match } = ctx;
        return match
            ? children
                ? typeof children === "function"
                    ? children(ctx)
                    : children
                : component
                    ? React.createElement(component, ctx)
                    : render
                        ? render(ctx)
                        : null
            : typeof children === "function"
                ? children(ctx)
                : null;
    }
    consumer = ({ history, location, match }) => {
        const { path, computeRootMatch } = this.props;
        const newCtx = {
            history,
            location,
            match: computeRootMatch
                ? computeRootMatch
                : path
                    ? this.createMatch(location)
                    : match
        }
        // 再次注入上下文,保证上下文是更新的
        return <context.Provider value={newCtx}>
            {this.renderChildrenW(newCtx)}
        </context.Provider>

    }
    createMatch(location) {
        const { exact = false, strict = false, sensitive = false } = this.props;
        const match = matchPath(this.props.path, location.pathname, { exact, strict, sensitive })
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
