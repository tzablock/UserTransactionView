import { combineReducers } from 'redux'
import { createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'
import {reduceInsertClientResult} from "./EditData";


const combinedReducer = combineReducers({
                              insertClientResult: reduceInsertClientResult,
                              form: formReducer
                           });

const store = createStore(combinedReducer);
export default store