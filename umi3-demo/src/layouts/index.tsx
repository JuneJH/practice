import React, { FC } from 'react'
import style from './index.less'
import Menu from '../components/menu'
import {IRouteProps,connect} from 'umi';


 const Layout:FC<IRouteProps> = (props)=> {
     if(props.location.pathname === "/login")return props.children
    return (
        <section className={style.container}>
            <header>
                <h1>后台管理系统</h1>
                <div>
                    <button onClick={props.logout}>退出</button>
                </div>
            </header>
            <section className={style.mainContainer}>
                <aside>
                    <Menu/>
                </aside>
                <section className={style.main}>
                    {props.children}
                </section>
            </section>
        </section>
    )
} 

const map2Dispatch = (dispatch:any)=>{
    return {
        logout(){
            dispatch({type:"tokenInfo/logout"})
        }
    }

}

export default connect(null,map2Dispatch)(Layout)