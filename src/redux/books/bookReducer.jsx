import { ADD_BOOK, DELETE_BOOK, LOADED_BOOK } from './actionsType'
import { initialState } from './initialState'

// const nextBookId = (books) => {
//   const maxId = books.reduce((maxId, book) => Math.max(book.id, maxId), -1)
//   return maxId + 1
// }
let nextId = 4

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: nextId++,
          ...action.payload,
        },
      ]

    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.payload)

    case LOADED_BOOK:
      return action.payload

    default:
      return state
  }
}

export default bookReducer
