import { connect } from 'react-redux'
import {insertClient} from "../../component/editdata/rest";
import {createInsertClientStatusAction} from "../../action/editdata/aditDataActions"
import AddClientPage from "../../component/editdata/AddClientPage";

const mapResult = dispatch => res => dispatch(createInsertClientStatusAction(res));

const mapStateToProperties = state => {
    return {
        insertClientResult: state.insertClientResult
    }
}

const mapPropertiesToState = dispatch => {
    return {
        addClient: clientForm => {
            console.log(clientForm)
            console.log(JSON.stringify(clientForm))
            insertClient(clientForm)(mapResult(dispatch))
        }
    }
}

const AddClientPageRedux = connect(mapStateToProperties, mapPropertiesToState)(AddClientPage)

export default AddClientPageRedux