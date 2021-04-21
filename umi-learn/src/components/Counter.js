import React from 'react'
import {connect} from 'umi';
import style from './index.css'
console.log("样式",style)
 function Counter({number,onIncrease,onDecrease}) {
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease} className={style.btn}>+</button>
            <button onClick={onDecrease} className={style.btn}>-</button>
        </div>
    )
}

const mapState2Props = (state)=>{
    console.log("仓库的值",state)
    return {
        number:state.counter
    }
}
const mapDispatchProps = (dispatch)=>({
    onIncrease(){
        dispatch({type:"counter/increase"})
    },
    onDecrease(){
        dispatch({type:"counter/decrease"})
    }
})
export default connect(mapState2Props,mapDispatchProps)(Counter)