import React,{useState} from 'react';
import ReactDOM from 'react-dom';

function Func(){
  const [state, setState] = useState("state");
  const [test, setTest] = useState("test-value")

  return (
    <h2>{state}-{test}</h2>
  )
}
const jsx = (<div>
  <h1>hello</h1>
  <Func/>
</div>)

console.log(jsx)

ReactDOM.render(jsx,
  document.getElementById('root')
);
