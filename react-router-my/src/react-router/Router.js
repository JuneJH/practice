import React, { Component } from 'react';
import context from './context'

export default class Router extends Component {
    render() {
        return (
            <context.Provider value={this.props.history}>
                {this.props.children}
            </context.Provider>
        )
    }
}
