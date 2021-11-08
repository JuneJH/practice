import React, { Component } from 'react';
import store from './myStore'
export default class testMyReadux extends Component {
    componentDidMount(){
        this.cancelSub = store.subscribe(()=>{
            this.forceUpdate();
        })
    }
    componentWillUnmount(){
        this.cancelSub && this.cancelSub();
    }
    asynAdd=()=>{
        store.dispatch((dispatch)=>{
            setTimeout(()=>{
                dispatch({type:"ADD"})
            },1000)
        })
    }
    render() {
        return (
            <div>
                仓库值：{store.getState()}
                <button onClick={()=>{
                    store.dispatch({type:"ADD"})
                }}>ADD</button>
                <button onClick={this.asynAdd}>asynAdd</button>
            </div>
        )
    }
}
