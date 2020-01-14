export const insertClient = (client) => (setClientInsertionResult) => {
    const HOST = "http://localhost:9000";
    const PATH = "/insert/client";
    fetch(HOST + PATH,
        {
            method: 'POST',
            body: JSON.stringify(client),
            headers: {"Content-Type":"application/json"}
            //          "Access-Control-Allow-Origin":"no-cors"}
        })
        .then(res => res.json())
        .then(res => setClientInsertionResult(res))
        .catch(err => console.log(err))
}