import { ADD_BOOK, DELETE_BOOK, LOADED_BOOK, UPDATE_BOOK } from './actionsType'
import { initialState } from './initialState'

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload]

    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.payload)

    case LOADED_BOOK:
      return action.payload

    case UPDATE_BOOK:
      const updatedBook = action.payload.updatedData
      const index = state.findIndex((book) => book.id === action.payload.id)
      if (!index || index) {
        state[index] = updatedBook
      }
      return state

    default:
      return state
  }
}

export default bookReducer
