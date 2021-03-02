import React from 'react';
import {Link,BrowserRouter } from 'react-router-dom'
import RouterView from './RouterView';

export default function App() {
  return (
    <BrowserRouter>
        <Link to="/">首页</Link>
        <Link to="/news">新闻页</Link>
        <RouterView></RouterView>
    </BrowserRouter>
  )
}
