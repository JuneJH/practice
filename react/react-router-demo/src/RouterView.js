import React from 'react';
import {Route, Switch} from "react-router-dom";
import {config} from './routerConfig'

export default function RouterView() {
    return (
        <Switch>
            {getRouter(config,"")}
        </Switch>
  
    )
}

function getRouter(config,basePath){
    if(!Array.isArray(config)){
        return null;
    }
    const result = config.map((con,i)=>{
        const {component:Component, path,children,...set} = con;
        const newPath = basePath + path;

        return <Route
            path={newPath}
            {...set}
            key={i}
            render={(router)=>{
                return <Component {...router}>
                    {getRouter(children,newPath)}
                </Component>
            }}
        />
    })
    return result;

}
