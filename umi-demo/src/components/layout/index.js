import React from 'react';
import style from './index.css'
import Menu from '../menu'

export default function index(props) {
    // if(props.children.props.location.pathname === "/login") return props.children;
    return (
        <div className={style.container}>
            <header className={style.title}>后台管理系统</header>
            <div className={style.main}>
                <aside className={style.meunContainer}>
                    <Menu/>
                </aside>
                <section className={style.mainContainer}>
                    {props.children}
                </section>
            </div>
        </div>
    )
}
