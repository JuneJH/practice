import types from './actionTypes'

export default {
    createLoading(flag){
        return {
            type:types.LOADING,
            payload:flag
        }
    },
    createStudents(data){
        return {
            type:types.STUDENTS,
            payload:data
        }
    },
    createCondition(condition){
        return {
            type:types.CONDITION,
            payload:condition
        }
    },
    createGetStudents(condition){
        return {
            type:types.GETSTUDENTS,
            payload:condition
        }
    }
}