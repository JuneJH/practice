import {getStudent} from '@/services/api';
import {routerRedux} from 'dva/router';

export default {
    state:{
        condition:{
            page:1,
            pagesize:10
        },
        total:0,
        data:[]
    },
    subscriptions:{
        listener({history,dispatch}:any){
            history.listen((location:any)=>{
                if(location.pathname !== "/"){
                    return;
                }
                const condition = location.query;
                dispatch({type:"changeCondition",payloay:{
                    page:parseInt(condition.page),
                    pagesize:parseInt(condition.pagesize),
                }})
                dispatch({type:"fetchStudent"})
            })

        }
    },
    reducers:{
        changeCondition(state:any,action:any){
            return {
                ...state,
                condition:{
                    ...state.condition,
                    ...action.payloay
                } 
            }
        },
        setTotal(state:any,action:any){
            return {
                ...state,
                total:action.payloay
            }
        },
        setData(state:any,action:any){
            return {
                ...state,
                data:action.payloay
            }
        }
    },
    effects:{
        *setCondition(action:any,saga:any):any{
            let condition =yield saga.select((state:any)=>state.students.condition)
            condition = {
                ...condition,
                ...action.payloay
            }
            yield saga.put(routerRedux.push(`?page=${condition.page}&pagesize=${condition.pagesize}`))
        },
        *fetchStudent(action:any,saga:any):any{
            console.log("请求数据")
            const condition = yield saga.select((state:any)=>{return state.students.condition})
            const result = yield saga.call(getStudent,condition);
            if(result.data.data){
                yield saga.put({type:"setTotal",payloay:result.data.total});
                yield saga.put({type:"setData",payloay:result.data.data})
            }
        }
    }
}