import * as userAction from '../action/userAction'
const initialState = [
    { id: 1, name: "张三", age: 11 },
    { id: 2, name: "李四", age: 12 },
]

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case userAction.ADDUSER:
            return [...state, { ...payload }];
        case userAction.DELETEUSER:
            return state.filter(it => it.id !== payload);
        case userAction.UPDATEUSER:
            return state.map(it => {
                if (it.id === payload.id) {
                    const temp =  {
                        ...it,
                        ...payload
                    }
                    return temp
                }
                return it;
            })

        default:
            return state
    }
}
