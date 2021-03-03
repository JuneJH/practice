import React from 'react';
import { Link, Route } from 'react-router-dom';
import Guard from './Guard'
import Page1 from './Page1';
import Page2 from './Page2';

export default function App() {
    return (
        <Guard beforeRouter={(msg,callback,preLocation,location,isCancel,action)=>{
           console.log(`日志:${preLocation.pathname}=>${location.pathname}。跳转方式:${action}`);
           callback(true);
        }}>
            <Link to="/page1">页面一</Link>
            <Link to="/page2">页面二</Link>
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
        </Guard>
    )
}
