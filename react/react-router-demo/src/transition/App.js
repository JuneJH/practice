import React from 'react';
import {Link,BrowserRouter} from 'react-router-dom'
import "./app.css";
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Transition from './Transition'
import "animate.css";

export default function App() {
  return (  
    <BrowserRouter>
       <nav>
       <Link to="/">首页</Link>
        <Link to="/page1">页面一</Link>
        <Link to="/page2">页面二</Link>
       </nav>
       <Transition path="/" exact component={Home}/>       
       <Transition path="/page1" exact component={Page1}/>       
       <Transition path="/page2" exact component={Page2}/>       
    </BrowserRouter>
  )
}