import {takeEvery,put,call,select} from 'redux-saga/effects';
import createAciont from './student';
import types from './actionTypes'
function getData(n) {
    return new Promise((resolve, reject) => {
        console.log("获得请求数据参数", n)
        setTimeout(() => {
            resolve([1, 2, 3, 4, 5])
        }, 3000)
    })
}

function* getStudents(){
    console.log("进入请求学生数据");
    yield put(createAciont.createLoading(true))
    const store =yield select();
    console.log("sss",store)
    const students = yield call(getData,store.condition);
    yield put(createAciont.createStudents(students))
    yield put(createAciont.createLoading(false))


}

export default function*(){
    console.log("进入saga监听")
    yield takeEvery(types.GETSTUDENTS,getStudents)
}