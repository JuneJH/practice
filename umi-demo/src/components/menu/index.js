import React from 'react'
import {NavLink} from 'umi';
import style from './index.css'
export default function index(props) {
    return (
        <div>
            
            <div className={style.navStyle}><NavLink  exact to="/student/list">学生列表页</NavLink></div>
            <div className={style.navStyle}> <NavLink exact  to="/student/add">学生添加页</NavLink></div>
            <div className={style.navStyle}><NavLink  exact to="/student/123">学生详情页</NavLink></div>
           
            
        </div>
    )
}