import {INSERT_CLIENT} from "../action/editdata/aditDataActions";


export function reduceInsertClientResult(state = '', action){
    switch (action.type) {
        case INSERT_CLIENT:
            return action.result;
        default:
            return state;
    }
}
