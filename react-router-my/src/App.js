import React from 'react';
// import "./router/matchRouter";
import {BrowserRouter,Route,Link} from 'react-router-dom'
import "./myHistory/index"

function Page(props){
  console.log("进入");
  console.log(props);
  return <div>
    THIS IS PAGE!
  </div>
}
export default function App() {
  return (
    <div>
      THIS
    </div>
    // <BrowserRouter>
    //    <Link to="/page/123">page</Link>
    //    <Route path="/page/:id" component={Page}/>
    // </BrowserRouter>
  )
}


