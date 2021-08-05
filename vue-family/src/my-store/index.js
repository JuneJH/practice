import Vue from 'vue'
import Vuex from './my-vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:1,
    dbCount:2,
  },
  mutations: {
    increase:state=>{console.log("increase");state.count ++},
    dbIncrease:state=>{console.log("dbIncrease");state.dbCount = state.count * 2}
  },
  actions: {
    asyncIncrease:async ({commit})=>{
        return new Promise((resolve,reject)=>{
          setTimeout(()=>{
            commit({type:"increase"});
            resolve();
          },2000)
        })
    },
    asyncDbIncrease:async ({dispatch,commit})=>{
      await dispatch({type:"asyncIncrease"});
      commit({type:"dbIncrease"});
    } 
  },
  modules: {
  }
})
