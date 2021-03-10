import React, { Component } from 'react';
import { matchPath } from '../router/matchRouter';
import context from './context'

export default class Router extends Component {
    state={
        location:this.props.history.location
    }
    componentDidMount(){
        this.unListent = this.props.history.listen((location,action)=>{
            this.props.history.action1 = action;
            this.setState({...location})
        })
    }
    componentWillUnmount(){
        this.unListent();
    }
    render() {
        const ctx ={
            history:this.props.history,
            location:this.state.location,
            match:matchPath("/",this.state.location.pathname)
        }
        return (
            <context.Provider value={ctx}>
                {this.props.children}
            </context.Provider>
        )
    }
}
