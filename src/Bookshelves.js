import React from 'react'
import Book from './Books'

const Bookshelf = ({ shelf, books, updateBooks }) => {
  const shelves = {
    'currentlyReading':'Currently Reading',
    'wantToRead':'Want to Read',
    'read':'Read'
  }
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelves[shelf]}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            books.filter(book=> book.shelf === shelf)
            .map(book=> (<Book key={book.id} book={book} updateBooks={updateBooks} />) )
          }
        </ol>
      </div>
    </div>
  )
}
export default Bookshelf
