export default {
    namespace:"counter",
    state:0,
    reducers:{
        increase(state){
            return state + 1;
        },
        decrease(state){
            return state - 1;
        }
    },
    //处理异步
    effects:{
        *asyncIncrease(action,{call,put}){
            yield call(delay,2000);
            yield put({type:"increase"})
            
        },
        *asyncDecrease(action,{call,put}){
            yield call(delay,2000);
            yield put({type:"decrease"})
        }
    },
    // 初始化时执行的函数对象集合
    subscriptions:{
        onSubscription(obj){
            console.log(obj)

        }
    }
}


function delay(duration){
    return new Promise(resove=>{
        setTimeout(()=>{
            resove()
        },duration)
    })
}