import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../redux/books/Actions'

const AddBook = () => {
  const dispatch = useDispatch()
  const [books, setBooks] = useState({
    bookId: '',
    bookName: '',
    authorName: '',
    imageUrl: '',
    bookPrice: '',
    bookRating: '',
    featured: '',
  })

  const handleChange = (e) => {
    setBooks((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleSubmit = (e) => {
    const newBook = {
      ...books,
      bookId: Math.random().toString(16).slice(2),
    }
    e.preventDefault()
    dispatch(addBook(newBook))
    console.log(newBook)
  }

  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
      <form className="book-form" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label htmlFor="name">Book Name</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookname"
            name="bookName"
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="category">Author</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookauthor"
            name="authorName"
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="image">Image Url</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookthumbnail"
            name="imageUrl"
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="price">Price</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookprice"
              name="bookPrice"
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="quantity">Rating</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookrating"
              name="bookRating"
              min="1"
              max="5"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="input-Bookfeatured"
            type="checkbox"
            name="featured"
            className="w-4 h-4"
            onChange={handleChange}
          />
          <label htmlFor="featured" className="ml-2 text-sm">
            This is a featured book
          </label>
        </div>

        <button type="submit" className="submit" id="submit">
          Add Book
        </button>
      </form>
    </div>
  )
}

export default AddBook
