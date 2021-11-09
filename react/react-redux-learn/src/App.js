// import Counter from './react_redux/Counter'
// import { Provider } from './react-redux-code';
// import store from './redux'
// import Students from './students'
// import store from './students/redux'
// import TestMyRedux from './test/testMyReadux'
import TestMyRedux from './test/testMyReactRedux'
import store from './test/myStore';
import {Provider} from './myReactRedux'
export default function App() {
  return (
    // <Provider store={store}>
    //   <Counter/>
    // </Provider>


    // <Provider store={store}>
    //   <Students />
    // </Provider>
    <Provider store={store}>

    <TestMyRedux/>
    </Provider>

  )
}
