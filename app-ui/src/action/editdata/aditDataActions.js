export const INSERT_CLIENT = "INSERT.CLIENT";

export const createInsertClientStatusAction = res => {
    return {
        type: INSERT_CLIENT,
        result: res
    }
}