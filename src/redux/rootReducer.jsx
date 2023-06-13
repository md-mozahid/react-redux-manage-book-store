import { combineReducers } from 'redux'
import bookReducer from './books/bookReducer'
import editReducer from './editBooks/editReducer'
import filtersReducer from './filters/filtersReducer'

const rootReducer = combineReducers({
  books: bookReducer,
  editing: editReducer,
  filters: filtersReducer,
})

export default rootReducer
