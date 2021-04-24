import React, { FC } from 'react';
import {NavLink} from 'umi'
import style from './index.less'
 const Menu:FC= () =>{
    return (
        <div className={style.container}>
            <NavLink exact to="/"><div className={style.item}>首页</div></NavLink>
            <NavLink exact to="/other"><div className={style.item}>其他</div></NavLink>
        </div>
    )
}

export default Menu;