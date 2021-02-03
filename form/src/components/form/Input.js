import React, { Component } from 'react'
import {Consumer} from './contextForm';

export default class Input extends Component {
    render() {
        return (
           <Consumer>
               {context=>(<input value={context.formData[this.props.name] || ""} name={this.props.name} type={this.props.type} onChange={e=>{
                   context.onChange(this.props.name,e.target.value)
               }}/>)}
           </Consumer>
        )
    }
}
