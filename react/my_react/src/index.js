// import { Component ,useState} from 'react';
// import ReactDOM from 'react-dom';
import "./index.css";
import ReactDOM ,{useState}from './myReact/react-dom/index_v2';
import {Component} from './myReact/react/Component'

function FunctionComponent(props){
  const [state, setState] = useState(0)
  const {name} = props;
  return <div className="border">
    <div>hello FunctionComponent</div>
    <div>{"props:"+name}</div>
    <div>{"state:"+state}</div>
    
    <button onClick={()=>{
      setState(state + 1);
      console.log("click")
    }}>加一</button>
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
