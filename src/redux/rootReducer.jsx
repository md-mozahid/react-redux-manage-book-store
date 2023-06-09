import { combineReducers } from 'redux'
import bookReducer from './books/bookReducer'

const rootReducer = combineReducers({
  books: bookReducer,
})

export default rootReducer
