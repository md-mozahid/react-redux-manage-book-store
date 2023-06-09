import React from 'react'
import Books from './Books'
import AddBook from './AddBook'

const Home = () => {
  return (
    <main className="py-12 2xl:px-6">
      <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
        <Books />
        <AddBook />
      </div>
    </main>
  )
}

export default Home
