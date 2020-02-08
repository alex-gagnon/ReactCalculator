import { SET_EXPRESSION } from "../types"

export const calculate = (expression) => {
    return {
        type: SET_EXPRESSION,
        payload: expression
    }
}