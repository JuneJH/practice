import React, { Component } from 'react'
import {Router} from '../react-router'
import {createBrowserHistory} from 'history'
console.log(createBrowserHistory)

export default class BrowserRouter extends Component {

    history = createBrowserHistory(this.props);
    render() {
        return (
            <Router history={this.history}/>
        )
    }
}
