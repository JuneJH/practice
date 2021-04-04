import {createStore,bindActionCreators } from 'redux';
import {applyMiddleware} from "../myRedux"
import { INCREASE, DECREASE, SET } from './action/type';
import * as loginAction from './action/loginAction'
import * as userAction from './action/userAction'
import reducer from './reducer'
import {logger} from 'redux-logger'
import thunk from '../redux-thunk'
// import {createStore,bindActionCreators} from '../myRedux'


// function reducer(state, action) {
//     if (action.type === INCREASE) {
//         return state + 1;
//     } else if (action.type === DECREASE) {
//         return state - 1;
//     } else if (action.type === SET) {
//         return action.payload;
//     }
//     return state;
// }

// const store = createStore(reducer,applyMiddleware(logger1,logger2));
const logger3 = store=>next=>action=>{console.log("中间件3");next(action);}
const t = thunk.withExtraArgument("附加信息")
const store = applyMiddleware(t,logger)(createStore)(reducer);
console.log(store);

// 原理
// let oldDispatch = store.dispatch;

// store.dispatch = function (action){
//     console.log("中间件111")
//     console.log(store.getState())
//     oldDispatch(action);
// }
// let oldDispatch1 = store.dispatch;
// store.dispatch = function (action){
//     console.log("中间件22")
//     console.log(store.getState())
//     oldDispatch1(action);
// }

/**
 * 
 * @param {部分store的值} store 
 */
function logger1(store){
    return function(next){
        return function (action){
            console.log("中间件1")
            next(action)
        }
    }
}

function logger2(store){
    return function(next){
        return function (action){
            console.log("中间件2")
            next(action)
        }
    }
}


// 绑定action和store
const boundAction = bindActionCreators({...loginAction,...userAction},store.dispatch);
boundAction.effect();
// store.dispatch(loginAction.createLoginAction({loginUser:"june"}))
// boundAction.createAddUserAction({id:3,name:"add",age:12})
// boundAction.createDeleteUserAction(1);
// boundAction.createUpdateUserAction(2,{name:"update",age:11})


// console.log("初始",store.getState());
// boundAction.getSetAction(20)
// console.log("设置",store.getState());

// console.log("初始",store.getState());
// boundAction.getIncreaseAction()
// console.log("加一后",store.getState());





window.s = store;