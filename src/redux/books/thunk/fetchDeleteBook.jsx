import { deleteBook } from '../Actions'

const fetchDeleteBook = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:9000/books/${id}`, {
        method: 'DELETE',
      })
      const books = await response.json()

      dispatch(deleteBook(id))
    } catch (error) {
      console.log(error)
    }
  }
}

export default fetchDeleteBook
