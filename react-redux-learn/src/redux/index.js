import {createStore,bindActionCreators,applyMiddleware } from 'redux';
import * as counterAction from './action/counter'
import reducer from './reducer'
import {logger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
const store = applyMiddleware(createSagaMiddleware(),logger)(createStore)(reducer);
// 绑定action和store
const boundAction = bindActionCreators({...counterAction},store.dispatch);
boundAction.getDecreaseAction();
window.b = boundAction;