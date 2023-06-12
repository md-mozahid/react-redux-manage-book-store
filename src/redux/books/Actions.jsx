import {
  ADD_BOOK,
  DELETE_BOOK,
  EDITED_BOOK,
  LOADED_BOOK,
  UPDATE_BOOK,
} from './actionsType'

export const addBook = (newBook) => {
  return {
    type: ADD_BOOK,
    payload: newBook,
  }
}

export const updateBook = (bookId, updatedData) => {
  console.log(bookId, updatedData)
  return {
    type: UPDATE_BOOK,
    payload: { bookId, updatedData },
  }
}

export const editedBook = (updatedInfo) => {
  return {
    type: EDITED_BOOK,
    payload: updatedInfo,
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
