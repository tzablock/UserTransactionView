export const insertClient = (client) => (setClientInsertionResult, resetForm) => {
    const HOST = "http://localhost:9000";
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
                         throw Error("Client can't be added.")
                     }})
        .then(res => {
            setClientInsertionResult(res);
            resetForm();
        })
        .catch(err => console.log(err))
}