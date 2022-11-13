import React,{useState} from 'react';
// import {BrowserRouter, Route, Switch, withRouter, NavLink, Link, useHistory, useLocation, useParams,Prompt} from 'react-router-dom';
import { BrowserRouter, Route, Switch, withRouter, NavLink, Link, useHistory, useLocation, useParams, useMatch } from './react-router-dom'

/**
 * A 页面
 * @param {*} props 
 * @returns 
 */
function A(props) {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  // const match = useMatch();
  const [visible, setVisible] = useState(true);
  return <div>
    动态路由页面
    获取路由上下文: {params.id}
    {/* <Prompt when={visible} message="是否离开此页面"></Prompt> */}
    <button onClick={()=>{setVisible(false)}}>可以离开</button>
  </div>
}
const WrapperA = withRouter(A);

function Page1(props) {
  return <h1>
    页面一
  </h1>
}
/**
 * Page1
 * @param {*} props 
 * @returns 
 */
function Page2(props) {
  return <h1>页面二</h1>
}
function notFound(ctx) {
  console.log("====", ctx)
  return <h1>404 not found</h1>
}
/**
 * 路由
 * @param {*} props 
 * @returns 
 */
function Nav(props) {
  return <div>
    <Link to="/page1">Page1</Link>
    <span> == </span>
    <Link to="/page2">Page2</Link>
    <span> == </span>
    <Link to="/page/123">动态路由</Link>
  </div>
}

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />

        {/* <NavLink to="/page/123">page</NavLink> */}
        <Switch>
          <Route path="/page1" component={Page1} children={() => <div>children</div>}></Route>
          <Route path="/page2" component={Page2} />
          <Route path="/page/:id" component={WrapperA} />
          <Route component={notFound} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

// * Route 渲染优先级 children > render > component




