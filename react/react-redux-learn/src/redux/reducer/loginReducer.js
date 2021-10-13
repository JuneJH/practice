import * as loginAction from '../action/loginAction'
const initialState = {
    loginUser: null,
}

export default (state = initialState, { type, payload }) => {
    console.log(type)
    switch (type) {

        case loginAction.SETLOGINUSER:
            return { ...state, ...payload }

        default:
            return state
    }
}
