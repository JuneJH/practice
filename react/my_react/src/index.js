// import { Component } from 'react';
// import ReactDOM from 'react-dom';
import "./index.css";
import ReactDOM from './myReact/react-dom/index_v1';
import {Component} from './myReact/react/Component'

function FunctionComponent(props){
  const {name} = props;
  return <div className="border">
    <div>hello FunctionComponent</div>
    <div>{"props:"+name}</div>
  </div>
}

class ClassComponent extends Component{
  render(){
    return <div className="border">
    <div>hello ClassComponent</div>
    <div>{"props:"+this.props.name}</div>
  </div>
  }
}

const jsx = (<div className="border"> 
  <h1>hello,react</h1>
  <h2>hello jsx</h2>
  <ClassComponent name="类组件"/>
  <FunctionComponent name="函数组件"/>

</div>)

ReactDOM.render(
  jsx,
  document.getElementById('root')
)
