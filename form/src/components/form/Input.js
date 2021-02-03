import React, { Component } from 'react'
import {Consumer} from './contextForm';

export default class Input extends Component {
    render() {
        return (
           <Consumer>
               {context=>(<input value={context[this.props.name]} onChange={e=>{
                   context.onChange(this.props.name,e.target.value)
               }}/>)}
           </Consumer>
        )
    }
}
