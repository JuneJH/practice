

import { routerRedux, NavLink, Route, Switch } from 'dva/router'
import About from '../pages/about'
import Home from '../pages/home'
import React from 'react'

export default function RouterConfig({ history }) {
    return (
        <routerRedux.ConnectedRouter history={history}>
        <div className="App">
            <NavLink to="/about">关于</NavLink>
            <NavLink to="/home">HOMEs</NavLink>
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/home" exact component={Home} />   
            </Switch>
        </div>
    </routerRedux.ConnectedRouter>
    )
}
