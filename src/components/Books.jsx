import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchBooks from '../redux/books/thunk/fetchBooks'
import { changeStatus } from '../redux/filters/Actions'
import Book from './Book'

const Books = () => {
  const dispatch = useDispatch()
  const books = useSelector((state) => state.books)
  const filters = useSelector((state) => state.filters)

  useEffect(() => {
    dispatch(fetchBooks)
  }, [dispatch])

  // filter function
  const statusByFilter = (book) => {
    switch (filters.status) {
      case 'Featured':
        return book.featured

      default:
        return book
    }
  }

  // filter handler
  const handleStatusChange = (status) => {
    dispatch(changeStatus(status))
  }

  return (
    <div className="order-2 xl:-order-1">
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>

        <div className="flex items-center space-x-4">
          <button
            className="filter-btn active-filter"
            id="lws-filterAll"
            onClick={() => handleStatusChange('All')}>
            All
          </button>
          <button
            className="filter-btn"
            id="lws-filterFeatured"
            onClick={() => handleStatusChange('Featured')}>
            Featured
          </button>
        </div>
      </div>
      <div className="lws-bookContainer">
        {books?.filter(statusByFilter)?.map((book) => (
          <Book book={book} key={book.id} />
        ))}
      </div>
    </div>
  )
}

export default Books
