import React, { Component } from 'react';
import { BrowserRouter, withRouter } from 'react-router-dom';

let location, preLocation, cancelBlock, cancelListen,action;
class _GuardHelper extends Component {
    componentDidMount() {
        cancelListen = this.props.history.listen((location, action) => {
            if (this.props.listenRouter) {
                this.props.listenRouter(this.props.location, location, action, cancelListen);
            }
        })
        cancelBlock = this.props.history.block((currlocation,ac)=>{
            location = currlocation;
            preLocation = this.props.location;
            action = ac;
            return ""
        })
    }
    componentWillUnmount(){
        cancelListen();
        cancelBlock();
    }
    render() {
        return null;
    }
}
const GuardHelper = withRouter(_GuardHelper);

export default class Guard extends Component {
    beforeRouter(msg, callback) {
        if (this.props.beforeRouter) {
            this.props.beforeRouter(msg, callback, preLocation, location, cancelBlock,action)
        } else {
            callback(true);
        }
    }
    render() {
        return (<BrowserRouter getUserConfirmation={this.beforeRouter.bind(this)} >
            <GuardHelper listenRouter={this.props.listenRouter} />
            {this.props.children}
        </BrowserRouter>)
    }
}


