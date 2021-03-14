import { createStore } from 'redux';
import { INCREASE, DECREASE, SET } from './action/type';
import { getDecreaseAction, getIncreaseAction, getSetAction } from "./action"


function reducer(state, action) {
    if (action.type === INCREASE) {
        return state + 1;
    } else if (action.type === DECREASE) {
        return state - 1;
    } else if (action.type === SET) {
        return action.payload;
    }
    return state;
}

const store = createStore(reducer, 1);

console.log("初始",store.getState());
store.dispatch(getDecreaseAction());
console.log("减一后",store.getState());


console.log("初始",store.getState());
store.dispatch(getSetAction(20));
console.log("设置",store.getState());

console.log("初始",store.getState());
store.dispatch(getIncreaseAction());
console.log("加一后",store.getState());





window.s = store;