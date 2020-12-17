import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelves'

const ListBooks = ({ books, updateBooks }) => {
  const shelves = ['currentlyReading','wantToRead','read']

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map((shelf,i)=> (<Bookshelf key={i} shelf={shelf} books={books} updateBooks={updateBooks} />) )}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Search Books</Link>
      </div>
    </div>
  )
}
export default ListBooks
