import { connect } from 'react-redux'
import {reset} from 'redux-form'
import {insertClient} from "../../component/editdata/rest";
import {createInsertClientStatusAction} from "../../action/editdata/aditDataActions"
import AddClientPage from "../../component/editdata/AddClientPage";

const mapResult = dispatch => res => dispatch(createInsertClientStatusAction(res));
const resetForm = (dispatch,formName) => () => dispatch(reset(formName))

const mapStateToProperties = state => {
    return {
        insertClientResult: state.insertClientResult
    }
};

const mapPropertiesToState = dispatch => {
    return {
        addClient: clientForm => {
            insertClient(clientForm)(mapResult(dispatch), resetForm(dispatch, 'addClient'));
        }
    }
};

const AddClientPageRedux = connect(mapStateToProperties, mapPropertiesToState)(AddClientPage);

export default AddClientPageRedux