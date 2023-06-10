import { combineReducers } from 'redux'
import bookReducer from './books/bookReducer'
// import filtersReducer from './filters/filtersReducer'

const rootReducer = combineReducers({
  books: bookReducer,
  // filters: filtersReducer,
})

export default rootReducer
