export function logger({getState,dispatch}){
    return next=>{
        return action=>{
            console.log(`==============${new Date()}===============`)
            console.log(`action:%c  ${action.type}`,"color:red;")
            console.log("上次的值",getState());
            const res = next(action);
            console.log("本次的值",getState())
            console.log(`==============${new Date()}===============`)
            return res;
        }
    }
}