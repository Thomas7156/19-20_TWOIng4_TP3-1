import { createStore, combineReducers } from 'redux'
import setCurrent from './Reducers/ProfilReducer.js'
// import setLike from './Reducers/ProfilReducer.js'

export default createStore(combineReducers({setCurrent}))
