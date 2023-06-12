import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchAddBook from '../redux/books/thunk/fetchAddBook'

const AddBook = () => {
  const dispatch = useDispatch()
  const editBook = useSelector((state) => state.books)

  // option 01
  const [books, setBooks] = useState({
    // bookId: '',
    name: '',
    author: '',
    thumbnail: '',
    price: '',
    rating: '',
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

  // option 02
  // const [bookName, setBookName] = useState('')
  // const [author, setAuthor] = useState('')
  // const [thumbnail, setThumbnail] = useState('')
  // const [price, setPrice] = useState('')
  // const [rating, setRating] = useState('')
  // const [featured, setFeatured] = useState(false)

  const [isEditing, setIsEditing] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // const books = {
    //   name: bookName,
    //   author: author,
    //   thumbnail: thumbnail,
    //   price: price,
    //   rating: rating,
    //   featured: featured,
    // }
    dispatch(fetchAddBook(books))
  }

  const updatedBook = (e) => {
    e.preventDefault()
    dispatch(bookUpdated(books))
  }

  useEffect(() => {
    if (editBook?.id) {
      setIsEditing(true)
      setBooks({
        name: editBook?.name,
        author: editBook?.author,
        thumbnail: editBook?.thumbnail,
        price: editBook?.price,
        rating: editBook?.rating,
        featured: editBook?.featured,
      })
    } else {
      setIsEditing(false)
    }
  })

  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
      <form
        className="book-form"
        onSubmit={isEditing ? updatedBook : handleSubmit}>
        <div className="space-y-2">
          <label htmlFor="name">Book Name</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookname"
            name="name"
            onChange={handleChange}
            // value={name}
            // onChange={(e) => setBookName(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="category">Author</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookauthor"
            name="author"
            // value={author}
            onChange={handleChange}
            // onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="image">Image Url</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookthumbnail"
            name="thumbnail"
            onChange={handleChange}
            // value={thumbnail}
            // onChange={(e) => setThumbnail(e.target.value)}
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
              name="price"
              onChange={handleChange}
              // value={price}
              // onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="quantity">Rating</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookrating"
              name="rating"
              min="1"
              max="5"
              onChange={handleChange}
              // value={rating}
              // onChange={(e) => setRating(e.target.value)}
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
            // value={featured}
            // onChange={(e) => setFeatured(e.target.value)}
          />
          <label htmlFor="featured" className="ml-2 text-sm">
            This is a featured book
          </label>
        </div>

        <button type="submit" className="submit" id="submit">
          {isEditing ? 'Update Book' : 'Add Book'}
        </button>
      </form>
    </div>
  )
}

export default AddBook
