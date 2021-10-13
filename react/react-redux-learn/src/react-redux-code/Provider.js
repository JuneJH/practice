import React from 'react'
import ctx from './context'
export default function Provider(props) {
    return (
        <ctx.Provider value={props.store}>
            {props.children}
        </ctx.Provider>
    )
}
