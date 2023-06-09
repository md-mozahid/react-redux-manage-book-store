import { ADD_BOOK, DELETE_BOOK, LOADED_BOOK, UPDATE_BOOK } from './actionsType'

export const addBook = (newBook) => {
  return {
    type: ADD_BOOK,
    payload: newBook,
  }
}

export const updateBook = (bookId) => {
  return {
    type: UPDATE_BOOK,
    payload: bookId,
  }
}

export const deleteBook = (bookId) => {
  return {
    type: DELETE_BOOK,
    payload: bookId,
  }
}

export const loadedBook = (books) => {
  return {
    type: LOADED_BOOK,
    payload: books,
  }
}
