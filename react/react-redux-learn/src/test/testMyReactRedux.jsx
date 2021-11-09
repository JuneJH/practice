import React, { Component } from 'react';
import {connect} from '../myReactRedux'
class testMyReadux extends Component {
    componentDidMount(){
        console.log("this.props",this.props)
    }
    asynAdd=()=>{
      this.props.dispatch((dispatch)=>{
            setTimeout(()=>{
                dispatch({type:"ADD"})
            },1000)
        })
    }
    render() {
        const {count,dispatch} = this.props;
        return (
                <div>
             仓库值：{count}
                <button onClick={()=>{
                    dispatch({type:"ADD"})   
                }}>ADD</button>
                <button onClick={this.asynAdd}>asynAdd</button>
            </div>
        )
    }
}


export default connect(state=>({count:state}))(testMyReadux)