import { createStore } from "vuex";
import { delay } from "./utils";


export default createStore({
    state:{
        user:null,
        loading:false
    },
    mutations:{
        setUser(state,payload){
            state.user = payload;
        },
        setLoading(state,payload){
            state.loading = payload;
        }
    },
    actions:{
        async login({commit}){
            commit("setLoading",true);
            await delay(2000);
            const user = await Promise.resolve({name:"june",age:18,info:"vuex 数据"});
            commit("setUser",user);
            commit("setLoading",false);
        }
    }
})