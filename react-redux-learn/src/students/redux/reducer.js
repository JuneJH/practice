import types from './actionTypes'
const initState = {
    condition: {page:1,pagesize:100},
    students: [],
    loading: false
}
export default function (state = initState, { type, payload }) {
    switch (type) {
        case types.CONDITION:
            return {
                ...state,
                condition: {...payload}
            };
        case types.STUDENTS:
            return {
                ...state,
                students: payload
            };
        case types.LOADING:
            return {
                ...state,
                loading: payload
            };

        default:
            return {...state};
    }
}