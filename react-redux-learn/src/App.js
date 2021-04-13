import React from 'react'
// import Counter from './react_redux/Counter'
import { Provider } from 'react-redux';
// import store from './redux'
import Students from './students'
import store from './students/redux'

import createAciton from './students/redux/student'
store.dispatch(createAciton.createLoading(false))
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
