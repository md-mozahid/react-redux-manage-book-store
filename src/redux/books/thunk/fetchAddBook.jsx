import { addBook } from '../Actions'

const fetchAddBook = (newBook) => {
  return async (dispatch) => {
    const response = await fetch('http://localhost:9000/books', {
      method: 'POST',
      body: JSON.stringify({newBook}),
      headers: {
        'Content-type': 'application/json; charset = UTF-8,', // if bangle text, the will show correctly
      },
    })
    const book = await response.json()

    dispatch(addBook(book))
  }
}

export default fetchAddBook
