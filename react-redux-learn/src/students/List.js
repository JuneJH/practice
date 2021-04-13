import React,{useEffect} from 'react'

export default function List(props) {
    const dom = props.data.map((item)=>(
        <li key={item.id}>{item.name}</li>
    ))
    useEffect(() => {
        props.getData();
    }, [])
    return (
        <>
        <button onClick={()=>{
            props.pageAdd({
                ...props.condition,
                page:props.condition.page + 1
            })
        }}>页面加一</button>
        {!props.loading?   <ul onClick={()=>{
            props.getData()
        }}>
            {dom}
        </ul> : <div style={{color:"red",fontSize:30}}>加载中...</div>} 
        </>
    )
}
