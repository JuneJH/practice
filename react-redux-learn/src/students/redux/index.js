import reducer from './reducer'
import {logger} from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import {createStore,applyMiddleware} from 'redux'
import saga from './saga'


const sagaMiddleware = createSagaMiddleware();
const store = applyMiddleware(sagaMiddleware,logger)(createStore)(reducer);

sagaMiddleware.run(saga);

export default store;