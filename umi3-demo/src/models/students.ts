import {getStudent} from '@/services/api'
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
        initStudents({dispatch}:any){
            dispatch({type:"fetchStudent"})

        }
    },
    reducers:{
        setCondition(state:any,action:any){
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