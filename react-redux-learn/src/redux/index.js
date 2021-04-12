import {createStore,bindActionCreators,applyMiddleware } from 'redux';
import * as counterAction from './action/counter'
import reducer from './reducer'
import {logger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import saga from '../saga'
const sagaMiddleware = createSagaMiddleware();
const store = applyMiddleware(sagaMiddleware,logger)(createStore)(reducer);
sagaMiddleware.run(saga)
// 绑定action和store
const boundAction = bindActionCreators({...counterAction},store.dispatch);
window.b = boundAction;


export default store;