import { loadedBook } from '../Actions'

const fetchBooks = async (dispatch) => {
  const response = await fetch('http://localhost:9000/books')
  const books = await response.json()

  dispatch(loadedBook(books))
}

export default fetchBooks
