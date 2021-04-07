import {call, put, select, takeEvery,delay} from 'redux-saga/effects';
import * as counterAction from '../redux/action/type';
import {getSetAction} from '../redux/action/counter'

function getData (n){
    return new Promise((resolve,reject)=>{
        console.log("获得请求数据参数",n)
        setTimeout(()=>{
            resolve([1,2,3,4,5])
        },3000)
    })
}
function* asyncIncrease(){
    console.log("触发了asyncIncrease")
    const store = yield select();
    yield delay(5000)
    const result = yield call(getData,store.counterReducer.n)
    console.log("请求数据结果",result)
    yield put(getSetAction(result[result.length - 1]))
}

function* asyncDecrease(){
    console.log("触发了asyncDecrease")
}

export default function*(){
    yield takeEvery(counterAction.INCREASE,asyncIncrease);
    yield takeEvery(counterAction.DECREASE,asyncDecrease);
    console.log("正在监听")
}