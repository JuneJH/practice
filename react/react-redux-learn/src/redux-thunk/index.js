function createThunk(extra) {
    return store=>next=>action=>{
        if(typeof action === "function"){
            return action(store.dispatch,store.getState,extra);
        }
        return next(action)
    }
}
const thunk = createThunk();
thunk.withExtraArgument = createThunk;
export default thunk;