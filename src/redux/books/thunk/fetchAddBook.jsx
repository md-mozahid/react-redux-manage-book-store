import { addBook } from '../Actions'

const fetchAddBook = (newBook) => {
  console.log(newBook)
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:9000/books', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset = UTF-8,',
        },
        // option 01
        // body: JSON.stringify(newBook)

        // option 02
        body: JSON.stringify({
          name: newBook.name,
          author: newBook.author,
          price: newBook.price,
          rating: newBook.rating,
          thumbnail: newBook.thumbnail,
          featured: newBook.featured,
        }),
      })
      const books = await response.json()

      dispatch(addBook(books))
    } catch (error) {
      console.log(error)
    }
  }
}

export default fetchAddBook
