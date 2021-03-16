import {bindActionCreators } from 'redux';
import { INCREASE, DECREASE, SET } from './action/type';
import * as loginAction from './action/loginAction'
import * as userAction from './action/userAction'
import reducer from './reducer'
import {createStore} from '../myRedux'


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
const store = createStore(reducer);

console.log(store)

store.subscribe(()=>{
    console.log(store.getState())
})

// 绑定action和store
const boundAction = bindActionCreators({...loginAction,...userAction},store.dispatch);

store.dispatch(loginAction.createLoginAction({loginUser:"june"}))
boundAction.createAddUserAction({id:3,name:"add",age:12})
boundAction.createDeleteUserAction(1);
boundAction.createUpdateUserAction(2,{name:"update",age:11})


// console.log("初始",store.getState());
// boundAction.getSetAction(20)
// console.log("设置",store.getState());

// console.log("初始",store.getState());
// boundAction.getIncreaseAction()
// console.log("加一后",store.getState());





window.s = store;