import  { useReducer } from './myReact/react';
// import ReactDOM from 'react-dom';
import ReactDOM from './myReact/react-dom';
import React from 'react';


function Fn() {
  const [state, dispatch] = useReducer((x) => {console.log("使用结果返回",x);return x + 1}, 1);
  return <div>
    <h2>this is function component</h2>
    <span>状态值：{state}</span>
    <button onClick={()=>{dispatch({ type: "1" })}}>++</button>
  </div>
}
const jsx = (<div>
  <h1 style={{ color: "red" }}>hello</h1>
  <div>Fiber</div>
  <Fn />
  {/* <FunComponet name="我是参数"/> */}
</div>)


ReactDOM.render(jsx,
  document.getElementById('root')
);
