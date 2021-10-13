import React from 'react'
import { Link } from 'react-router-dom'

export default function News(props) {
    console.log(props,props.children)
    return (
        <div>
            <Link to="/news/news1">page1</Link>
            <Link to="/news/news2">page2</Link>
            <Link to="/news">首页</Link>
            <h1>新闻首页</h1>
            {props.children}
        </div>
    )
}
