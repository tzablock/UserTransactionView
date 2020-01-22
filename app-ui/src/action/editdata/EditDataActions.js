export const INSERT_CLIENT = "INSERT.CLIENT";
export const GET_CLIENT_IDS = "GET.CLIENT.IDS";
export const GET_CLIENT_IDS_STATUS = "GET.CLIENT.IDS.STATUS";


export const createInsertClientStatusAction = res => {
    return {
        type: INSERT_CLIENT,
        result: res
    }
};
export const createGetClientIdsAction = res => {
    return {
        type: GET_CLIENT_IDS,
        result: res
    }
};
export const createGetClientIdsStatusAction = err => {
    return {
        type: GET_CLIENT_IDS_STATUS,
        result: err
    }
}