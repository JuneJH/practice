import React, { Component } from 'react'
import { Provider } from './contextForm';
import Input from "./Input"
import Button from './Button';
export default class Form extends Component {
    state = {
        formData: {

        },
        onChange:(key, value)=> {
            this.setState({
                formData: {
                    ...this.state.formData,
                    [key]: value,
                }
            })
        },
        onSubmit:() =>{
            this.props.onSubmit && this.props.onSubmit(this.state.formData);
        }
    }
    render() {
        return (
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        )
    }
}

Form.Input = Input;
Form.Button = Button;