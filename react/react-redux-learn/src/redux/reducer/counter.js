import { DECREASE, INCREASE,SET } from "../action/type";

const initState = {
    n: 0
}
export default function (state = initState, { type, payload }) {

    switch (type) {
        case INCREASE:
            return {
                ...state,
                n: state.n + 1
            }
        case DECREASE:
            return {
                ...state,
                n: state.n - 1
            }
        case SET:
            return {
                ...state,
                n:payload
            }

        default:
            return state;
    }

}