import loginReducer from './loginReducer';
import userReducer from './usersReducer';
import {} from 'redux';

export default function (state,action){
    return {
        loginReducer:loginReducer(state.loginReducer,action),
        userReducer:userReducer(state.userReducer,action)
    }
}