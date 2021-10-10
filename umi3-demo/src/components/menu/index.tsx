import React, { FC } from 'react';
import {NavLink} from 'umi'
import style from './index.less'
 const Menu:FC= () =>{
    return (
        <div className={style.container}>
            <NavLink exact to="/?page=1&pagesize=100"><div className={style.item}>首页</div></NavLink>
            <NavLink exact to="/other"><div className={style.item}>其他</div></NavLink>
            <NavLink exact to="/about"><div className={style.item}>关于</div></NavLink>
        </div>
    )
}

export default Menu;