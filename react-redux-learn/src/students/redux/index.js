import reducer from './reducer'
import {logger} from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import {createStore,applyMiddleware, bindActionCreators} from 'redux'
import saga from './saga'
import createAction from './student'


const sagaMiddleware = createSagaMiddleware();
// const store = createStore(reducer,applyMiddleware(sagaMiddleware,logger))
const store = applyMiddleware(sagaMiddleware)(createStore)(reducer);

bindActionCreators(createAction,store.dispatch);



sagaMiddleware.run(saga);

export default store;