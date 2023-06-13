import { combineReducers } from 'redux'
import bookReducer from './books/bookReducer'
import editReducer from './editBooks/editReducer'
import filtersReducer from './filters/filtersReducer'
import searchReducer from './searchBook/searchReducer'

const rootReducer = combineReducers({
  books: bookReducer,
  editing: editReducer,
  filters: filtersReducer,
  search: searchReducer,
})

export default rootReducer
