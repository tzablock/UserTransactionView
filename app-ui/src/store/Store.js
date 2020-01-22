import { combineReducers } from 'redux'
import { createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'
import {reduceInsertClientResult, reduceGetClientIdsResult, reduceGetClientIdsStatus} from "./EditData";


const combinedReducer = combineReducers({
                              insertClientResult: reduceInsertClientResult,
                              getClientIdsResult: reduceGetClientIdsResult,
                              getClientIdsStatus: reduceGetClientIdsStatus,
                              form: formReducer
                           });

const store = createStore(combinedReducer);
export default store