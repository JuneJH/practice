import React from 'react'

export default function List(props) {
    return (
        <div onClick={()=>{
            props.getData()
        }}>
            学生列表===========
        </div>
    )
}
