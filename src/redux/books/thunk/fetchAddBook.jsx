import { addBook } from '../Actions'

const fetchAddBook = (newBook) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:9000/books', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newBook),
      })
      const books = await response.json()

      dispatch(addBook(books))
    } catch (error) {
      console.log(error)
    }
  }
}

export default fetchAddBook
