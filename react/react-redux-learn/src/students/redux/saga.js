import {takeEvery,put,call,select} from 'redux-saga/effects';
import createAciont from './student';
import types from './actionTypes';
import axios from 'axios'
function getData(params) {
    return axios.get("/student",{
        params:{
            ...params
        },
        headers:{
            "authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo0LCJsb2dpbklkIjoiMjAxOSIsImRlbGV0ZWRBdCI6bnVsbH0sImlhdCI6MTYxODMyMDM5NSwiZXhwIjoxNjE4NDA2Nzk1fQ.8Sp9vQmB5fsgYe_Gqw-9uHZHCC_bxc3_hKacye0CwC4"
        }
    })
}

function* getStudents(){
    console.log("进入请求学生数据");
    yield put(createAciont.createLoading(true))
    const store =yield select();
    const {data} = yield call(getData,store.condition);
    yield put(createAciont.createStudents(data.data))
    yield put(createAciont.createLoading(false))


}

export default function*(){
    console.log("进入saga监听")
    yield takeEvery(types.GETSTUDENTS,getStudents)
}