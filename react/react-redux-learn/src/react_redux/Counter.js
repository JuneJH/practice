import React from 'react';
import store from '../redux'
import { getIncreaseAction,getDecreaseAction,getAsyncIncreaseAction, getAsyncDecreaseAction } from '../redux/action/counter';
import {connect} from 'react-redux'
 function Counter(props) {
    return (
        <div>
            <h1>{props.number}</h1>
            <button onClick={()=>{props.onAdd()}}>加一</button>
            <button onClick={()=>{props.onAsyncAdd()}}>异步加一</button>
            <button onClick={()=>{props.onDecrease()}}>减一</button>
            <button onClick={()=>{props.onAsyncDecrease()}}>异步减一</button>
        </div>
    )
}

function mapStateToProps(state){
    return {
        number:state.counterReducer.n
    }
}

function mapDispatch(dispatch){
    return {
        onAdd(){
            dispatch(getIncreaseAction())
        },
        onDecrease(){
            dispatch(getDecreaseAction())
        },
        onAsyncDecrease (){
            dispatch(getAsyncDecreaseAction())
        },
        onAsyncAdd(){
            dispatch(getAsyncIncreaseAction())
        }
    }
}
// export default class CounterContainer extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = mapStateToProps(store.getState());
      
//     }
//     componentDidMount(){
//         store.subscribe(()=>{
//             this.setState(mapStateToProps(store.getState()))
//         })
//     }
//     render(){
//         const eventDispatch = mapDispatch(store.dispatch)
//         return <Counter {...this.state} {...eventDispatch} />
//     }
// }

export default connect(mapStateToProps,mapDispatch)(Counter)


