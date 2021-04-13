import React from 'react'
// import Counter from './react_redux/Counter'
import { Provider } from './react-redux-code';
// import store from './redux'
import Students from './students'
import store from './students/redux'
export default function App() {
  return (
    // <Provider store={store}>
    //   <Counter/>
    // </Provider>


    <Provider store={store}>
      <Students />
    </Provider>

  )
}
