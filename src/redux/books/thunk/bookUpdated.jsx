import { updateBook } from '../Actions'

const bookUpdated = (id, updatedData) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:9000/books/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      })
      const books = await response.json()

      dispatch(updateBook(books))
    } catch (error) {
      console.log(error)
    }
  }
}

export default bookUpdated
