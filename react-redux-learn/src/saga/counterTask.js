import {takeEvery} from 'redux-saga/effects';
import * as counterAction from '../redux/action/type';

function* asyncIncrease(){
    console.log("触发了asyncIncrease")
}

function* asyncDecrease(){
    console.log("触发了asyncDecrease")
}

export default function*(){
    yield takeEvery(counterAction.INCREASE,asyncIncrease);
    yield takeEvery(counterAction.DECREASE,asyncDecrease);
    console.log("正在监听")
}