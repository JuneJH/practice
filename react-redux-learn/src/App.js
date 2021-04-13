import React from 'react'
import Counter from './react_redux/Counter'
import {Provider} from 'react-redux';
import store from './redux'

export default function App() {
  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  )
}
