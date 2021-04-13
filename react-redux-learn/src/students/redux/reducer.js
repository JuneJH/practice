import types from './actionTypes'
const initState = {
    condtion: {},
    students: [],
    loading: false
}
export default function (state = initState, { type, payload }) {
    switch (type) {
        case types.CONDITION:
            return {
                ...state,
                condtion: payload
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
            break;
    }
}