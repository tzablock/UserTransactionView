const HOST = "http://localhost:9000";
export const insertClient = (client) => (setClientInsertionResult, resetForm) => {
    const PATH = "/insert/client";
    fetch(HOST + PATH,
        {
            method: 'POST',
            body: JSON.stringify(client),
            headers: {"Content-Type":"application/json"}
        })
        .then(res =>{
                     if (res.ok){
                         return res.text()
                     } else {
                         throw new Error("Client can't be added.")
                     }})
        .then(res => {
            setClientInsertionResult(res);
            resetForm();
        })
        .catch(err => setClientInsertionResult(err.message))
}
export const getClientIds = () => (setClientIdsResult) => {
    const PATH = "/client/ids";
    fetch(HOST + PATH,
        {
            method: 'GET'
        })
        .then(res => {
            if(res.ok){
                return res.arrayBuffer()
            } else {
                throw new Error("Client Ids can't be retrieved.")
            }
        })
        .then(res => {
            setClientIdsResult(res, 'Client Ids retrieved.')
        })
        .catch(err => setClientIdsResult([], err.message))
}