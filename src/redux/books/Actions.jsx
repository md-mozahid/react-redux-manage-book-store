import { ADD_BOOK, DELETE_BOOK, LOADED_BOOK, UPDATE_BOOK } from './actionsType'

// add book
export const addBook = (newBook) => {
  return {
    type: ADD_BOOK,
    payload: newBook,
  }
}

// updated book
export const updateBook = (id, updatedData) => {
  console.log(id, updatedData)
  return {
    type: UPDATE_BOOK,
    payload: { id, updatedData },
  }
}

// delete book
export const deleteBook = (bookId) => {
  return {
    type: DELETE_BOOK,
    payload: bookId,
  }
}

// loaded book
export const loadedBook = (books) => {
  return {
    type: LOADED_BOOK,
    payload: books,
  }
}
