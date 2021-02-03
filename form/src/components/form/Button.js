import React, { Component } from 'react'
import {Consumer} from './contextForm';

export default class Button extends Component {
    render() {
        return (
           <Consumer>
               {context=>(<button onClick={context.onSubmit}>
                   {this.props.children}
               </button>)}
           </Consumer>
        )
    }
}
