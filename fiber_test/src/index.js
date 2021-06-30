import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from './myReact/react-dom'
function FunComponet(props){
  return (<h1>
    <a href="http://www.baidu.com">我是函数组件</a>
    <span>{props.name}</span>
  </h1>)
}
const jsx = (<div>
  <h1 style={{color:"red"}}>hello</h1>
  <div>Fiber</div>
  <FunComponet name="我是参数"/>
</div>)


ReactDOM.render(jsx,
  document.getElementById('root')
);
