
import counterReducer from './counter'
import {combineReducers} from 'redux';
// import {combineReducers} from '../../myRedux'

// export default function (state={},action){
//     return {
//         loginReducer:loginReducer(state.loginReducer,action),
//         userReducer:userReducer(state.userReducer,action)
//     }
// }

// export default combineReducers({loginReducer,userReducer,counterReducer})
export default combineReducers({counterReducer})
