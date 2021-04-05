import {INCREASE,DECREASE,SET} from './type';

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

export function getSetAction(newNumber) {
    return {
        type: SET,
        payload: newNumber
    }
}