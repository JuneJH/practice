import {INCREASE,DECREASE,SET,ASYNCDECREASE,ASYNCINCREASE} from './type';

export function getIncreaseAction() {
    return {
        type: INCREASE
    };
}

export function getDecreaseAction() {
    return {
        type: DECREASE
    }
}
export function getAsyncDecreaseAction() {
    return {
        type: ASYNCDECREASE
    }
}
export function getAsyncIncreaseAction() {
    return {
        type: ASYNCINCREASE
    }
}

export function getSetAction(newNumber) {
    return {
        type: SET,
        payload: newNumber
    }
}