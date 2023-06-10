import { ADD_BOOK, DELETE_BOOK, LOADED_BOOK } from './actionsType'
import { initialState } from './initialState'

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      // option 01
      // return [...state, action.payload]

      // option 02
      const newBook = action.payload
      return [
        ...state,
        {
          name: newBook.name,
          author: newBook.author,
          thumbnail: newBook.thumbnail,
          price: newBook.price,
          rating: newBook.rating,
          featured: newBook.featured,
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
