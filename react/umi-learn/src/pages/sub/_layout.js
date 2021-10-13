import React from 'react'
import {Link} from 'umi'

export default function layout(props) {
    return (
        <div>
            <Link to="/sub/a">sub a 页面</Link>
            <h1>我是sub公用部门</h1>
            {props.children}
        </div>
    )
}
