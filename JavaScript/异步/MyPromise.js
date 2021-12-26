
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
const FULFILLLIST = "fulfillList";
const REJECTLIST = "rejectList";
const PROMISESTATE = Symbol("promiseState");
const PROMISERESULT = Symbol("promiseResult");
class MyPromise {

    constructor(callback) {
        this[PROMISESTATE] = PENDING;
        this[PROMISERESULT] = undefined;
        this[FULFILLLIST] = [];
        this[REJECTLIST] = [];
        const resolve = (data) => {
            if(this[PROMISESTATE] !== PENDING){
                return;
            }
            this[PROMISESTATE] = FULFILLED;
            this[PROMISERESULT] = data;
            this[FULFILLLIST].forEach(fn=>{
                fn(data);
            })
        }
        const reject = err => {
            if(this[PROMISESTATE] !== PENDING){
                return;
            }
            this[PROMISESTATE] = REJECTED;
            this[PROMISERESULT] = err;
            this[REJECTLIST].forEach(fn=>{
                fn(err);
            })
        }
        try {
            callback(resolve, reject)
        } catch (err) {
            reject(err)
        }
    }

    then(settleHandle, catchHandle) {
        catchHandle && this.catch(catchHandle);
        return new MyPromise((resolve,reject)=>{
            if (this[PROMISESTATE] === FULFILLED) {
                let result = null;
                try{
                    result = settleHandle(this[PROMISERESULT]);
                }catch(err){
                    reject(err)
                }
                if(result instanceof MyPromise){
                    result.then(res=>resolve(res)).catch(err=>reject(err));
                }else{
                    resolve(result);
                }
            } else {
                this[FULFILLLIST].push((data)=>{
                    let result = null;
                    try{
                        result = settleHandle(data);
                    }catch(err){
                        reject(err)
                    }
                    if(result instanceof MyPromise){
                        result.then(res=>resolve(res)).catch(err=>reject(err));
                    }else{
                        resolve(result);
                    }
                })
            }
        })
       
    }
    catch(catchHandle) {
        return new MyPromise((resolve,reject)=>{
            if (this[PROMISESTATE] === REJECTED) {
                let result = null;
                try{
                    result = catchHandle(this[PROMISERESULT]);
                }catch(err){
                    reject(err)
                }
                if(result instanceof MyPromise){
                    result.then(res=>resolve(res)).catch(err=>reject(err));
                }else{
                    resolve(result);
                }
            } else {
                this[REJECTLIST].push((data)=>{
                    let result = null;
                    try{
                        result = catchHandle(data);
                    }catch(err){
                        reject(err)
                    }
                    if(result instanceof MyPromise){
                        result.then(res=>resolve(res)).catch(err=>reject(err));
                    }else{
                        resolve(result);
                    }
                })
            }
        })
    }
}