import Counter from './components/Counter'

import { routerRedux, NavLink, Route, Switch } from 'dva/router'

function HomePage() {
    return (<h1>首页</h1>)
}
export default function ({ history }) {
    return (
        <routerRedux.ConnectedRouter history={history}>
            <div className="App">
                <NavLink to="/">首页</NavLink>
                <NavLink to="/counter">计数器</NavLink>
                <Switch>
                    <Route path="/" component={HomePage} />
                    <Route path="/counter" exact component={Counter} />
                </Switch>
            </div>
        </routerRedux.ConnectedRouter>
    )
}