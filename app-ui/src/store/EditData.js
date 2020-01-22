import {INSERT_CLIENT, GET_CLIENT_IDS, GET_CLIENT_IDS_STATUS} from "../action/editdata/EditDataActions";


export function reduceInsertClientResult(state = '', action){
    switch (action.type) {
        case INSERT_CLIENT:
            return action.result;
        default:
            return state;
    }
}

export function reduceGetClientIdsResult(state = [], action) {
    switch (action.type) {
        case GET_CLIENT_IDS:
            return action.result;
        default:
            return state;
    }
}

export function reduceGetClientIdsStatus(state = '', action) {
    if (action.type === GET_CLIENT_IDS_STATUS){
        return action.result;
    } else {
        return state;
    }
}
