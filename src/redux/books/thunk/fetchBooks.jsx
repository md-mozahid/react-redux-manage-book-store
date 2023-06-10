import { loadedBook } from '../Actions'

const fetchBooks = async (dispatch) => {
  const response = await fetch('http://localhost:9000/books')
  const book = await response.json()

  dispatch(loadedBook(book))
}

export default fetchBooks
