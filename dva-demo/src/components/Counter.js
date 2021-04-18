import React from 'react'
import {connect} from 'dva'
 function Counter(props) {
     console.log(props)
    return (
        <div>
            <h1>{props.number}</h1>
            <button onClick={()=>{props.asyncIncrease()}}>异步+</button>
            <button onClick={()=>{props.increase()}}>+</button>
            <button onClick={()=>{props.decrease()}}>-</button>
            <button onClick={()=>{props.asyncDecrease()}}>异步</button>

        </div>
    )
}
const mapState2Props = (state)=>{
    console.log(state)
    return {
        number:state.counter
    }
}
const mapDispatch2Props = (dispatch)=>{
    return {
        increase(){
            dispatch({type:"counter/increase"})
        },
        decrease(){
            dispatch({type:"counter/decrease"})
        },
        asyncIncrease(){
            dispatch({type:"counter/asyncIncrease"})
        },
        asyncDecrease(){
            dispatch({type:"counter/asyncDecrease"})
        }
    }
}

export default connect(mapState2Props,mapDispatch2Props)(Counter)