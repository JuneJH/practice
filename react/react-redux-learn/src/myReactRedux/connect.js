import React,{useContext,useReducer,useEffect} from 'react'
const Context = React.createContext();

export const connect = (mapStateToProps=state=>state,mapDispatchToProps)=>Comp=>props=>{
    const [,forceUpdate] = useReducer(x=>x+1, 0);
    const store = useContext(Context);
    const {getState,dispatch,subscribe} = store;
    useEffect(() => {
        const cancel = subscribe(()=>{
            forceUpdate();
        })
        return ()=>{
            cancel && cancel();
        }
    }, [])
    const mapState = mapStateToProps(getState());
    const mapDispatch = {dispatch}
    return <Comp {...props} {...mapState} {...mapDispatch} />
}

export function useSelector(mapState=state=>state){
    const store = useContext(Context);
    console.log(store.getState())
    return mapState(store.getState());
}
export function useDispatch(){
    const store = useContext(Context);
    const [,forceUpdate] = useReducer(x=>x+1, 0);
    const {dispatch,subscribe} = store;
    useEffect(() => {
        const cancel = subscribe(()=>{
            forceUpdate();
        })
        return ()=>{
            cancel && cancel();
        }
    }, [])
    return dispatch;
}
export function Provider({store,children}){
    return <Context.Provider value={store}>
        {children}
    </Context.Provider>
}