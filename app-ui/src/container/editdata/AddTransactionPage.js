import { connect } from 'react-redux'
import {reset} from 'redux-form'
import {getClientIds} from "../../component/editdata/rest";
import {createGetClientIdsAction, createGetClientIdsStatusAction} from "../../action/editdata/EditDataActions"
import AddTransactionPage from "../../component/editdata/AddTransactionPage";

const castArrayBuffToArray = ab => [...new Int8Array(ab)]
const mapResult = dispatch => (res, err) => {
    var cRes = castArrayBuffToArray(res)
    dispatch(createGetClientIdsAction(cRes));//[1,2,3]
    dispatch(createGetClientIdsStatusAction(err));
};
const resetForm = (dispatch,formName) => () => dispatch(reset(formName))

const mapStateToProperties = state => {
    return {
        getClientIdsResult: state.getClientIdsResult,
        getClientIdsStatus: state.getClientIdsStatus
    }
};

const mapPropertiesToState = dispatch => {
    return {
        getClientIds: () => {
            getClientIds()(mapResult(dispatch))
        }
    }
};

const AddTransactionPageRedux = connect(mapStateToProperties, mapPropertiesToState)(AddTransactionPage);

export default AddTransactionPageRedux