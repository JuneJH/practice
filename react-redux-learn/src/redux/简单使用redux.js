import {createStore} from 'redux';
const action = {
    type:"IN"
}

function reducer(state,action){
    if(action.type === "In"){
        return state + 1;
    }else if(action.typ === "Out"){
        return state - 1;
    }
    return state;
}

const store = createStore(reducer,1);

console.log(store.getState());
store.dispatch(action);
console.log(store.getState());

window.s = store;