import React from 'react';
import {  Link, Route } from 'react-router-dom'
import Page1 from './Page1';
import Page2 from './Page2';
import Guard from '../guard/Guard'
import moveScroll from './moveScroll';

export default function App() {
    return (
        <Guard beforeRouter={(msg,callback,preLocation,location,isCancel,action)=>{
            if(preLocation.pathname == location.pathname){
                callback(true)
            }else{
                moveScroll(document.documentElement.scrollTop,0);
                callback(true);
            }
        }}>
            <div style={{
                width:"700px",
                margin:"0 auto"
            }}>
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
            </div>
            <div style={{
                position: "fixed",
                top: "50%",
                left: 0
            }}>
                <div>
                    <Link to="/page1">页面一</Link>
                    <Link to="/page2">页面二</Link>
                </div>
            </div>
        </Guard>
    )
}
