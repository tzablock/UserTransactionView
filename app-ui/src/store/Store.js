import { combineReducers } from 'redux'
import { createStore } from 'redux'
import { reducer as formReducer } from 'react-redux-form'


const combinedReducer = combineReducers({
                              form: formReducer
                           })

const store = createStore(combinedReducer)
export default store