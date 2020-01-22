import React from 'react'
//getClientIdsResult  getClientIds
class AddTransactionPage extends React.Component{

    render() {
        return <AddTransactionForm getAllAvailableClientIds={this.props.getClientIds}
                                   clientIdsRequestResult={this.props.getClientIdsResult}
                                   clientIdsRequestStatus={this.props.getClientIdsStatus}/>
    }
}

let AddTransactionForm = props => {

    return (
        <div>
            <button onClick={() => props.getAllAvailableClientIds()}>GeClientIds</button>  // invoke getting ids
            {props.clientIdsRequestResult.map((id, indx) => (<p>{id}</p>))}  // ids returned
            <p>{props.clientIdsRequestStatus}</p>     //result of request
        </div>
    )
}

export default AddTransactionPage