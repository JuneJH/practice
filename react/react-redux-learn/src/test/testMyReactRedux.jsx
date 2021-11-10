import React, { Component } from 'react';
import {connect,useSelector,useDispatch} from '../myReactRedux'

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
                <h1>hooks 使用</h1>
                <TestMyHooksRedux/>
            </div>
        )
    }
}

function TestMyHooksRedux(){
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    return <div onClick={()=>{
        dispatch({type:"ADD"})
    }}>{state}</div>
}


export default connect(state=>({count:state}))(testMyReadux)