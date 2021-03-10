import React from 'react';
// import "./router/matchRouter";
// import {BrowserRouter,Route,Link} from 'react-router-dom';
import { BrowserRouter, Route, Switch ,withRouter,NavLink} from './react-router-dom'
import "./myHistory/index"
function A(props){
  return <div>
    获取路由上下文: {props.location.pathname}
  </div>
}
const WrapperA = withRouter(A)
function Page(props) {
  return <div>
    THIS IS PAGE!
    <WrapperA/>
  </div>
}
function Page1(props) {
  return <h1>this is page1</h1>
}
function Nav(props) {
  return <div>
    <button onClick={() => { props.history.push("/page") }}>page</button>
    <button onClick={() => { props.history.push("/page1") }}>page1</button>
  </div>
}
export default function App() {
  return (
    <BrowserRouter>
      <NavLink to="/page/123">page</NavLink>
      <Switch>
        <Route path="/page" component={Page}></Route>
        <Route path="/page1" component={Page1} />
        <Route path="/" component={Nav} />
      </Switch>
    </BrowserRouter>
  )
}


