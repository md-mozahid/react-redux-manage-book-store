import { ADD_BOOK, DELETE_BOOK, LOADED_BOOK } from './actionsType'
import { initialState } from './initialState'

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload]

    case DELETE_BOOK:
      return state.filter((book) => book.bookId !== action.payload)

    case LOADED_BOOK:
      return action.payload

    default:
      return state
  }
}

export default bookReducer
