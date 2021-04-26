import { login } from "@/services/api"
import {history} from 'umi'
export default {
    state:{tokenInfo:null},
    reducers:{
        setLogin(state:any,action:any){
            return {
                token:action.payloay
            }
        }
    },
    subscriptions:{
        syncLocalstorage(a:any){
            const token = localStorage.getItem("token");
            if(token){
                a.dispatch({type:"setLogin",payloay:token})
            }
        }
    },
    effects:{
        *login(action:any,dva:any):any{
           const result:any = yield dva.call(login,action.payloay)
           console.log(result)
           if(result.headers.authorization){
               yield dva.put({type:"setLogin",payloay:result.headers.authorization})
               window.localStorage.setItem("token",result.headers.authorization)
               return true;
           }
           return false;
          
        },
        *logout(action:any,dva:any):any{
            window.localStorage.removeItem("token")
            history.push("/login")
            yield dva.put({type:"setLogin",payloay:null})
            return null;
        }
    }
}