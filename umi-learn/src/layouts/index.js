import React from 'react';
import {Link} from 'umi'

export default function index(props) {
    console.log("执行公共部分",props)

    return (
        <div>
            <header>
                <Link style={{marginLeft:10}} to="/">首页</Link>
                <Link style={{marginLeft:10}} to="/a">A页</Link>
                <Link style={{marginLeft:10}} to="/b">B页</Link>
                <Link style={{marginLeft:10}} to="/sub">Sub页</Link>
            </header>
            <div style={{margin:100}}>
                {props.children}
            </div>
        </div> 
    )
}
    