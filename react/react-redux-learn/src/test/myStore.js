import {createStore,applyMiddleware} from '../myRedux';
// import thunk from 'redux-thunk'
// import {logger} from 'redux-logger'
import {logger} from '../myRedux/middleware/logger'
import {thunk} from '../myRedux/middleware/thunk'

function reducer(state = 0,{type,payload}){
    switch (type) {
        case "ADD":
            return state + 1;
        
        default:
            return state;
    }

}

const store = createStore(reducer,applyMiddleware(thunk,logger));


export default store;
