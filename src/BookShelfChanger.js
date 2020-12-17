import React from 'react'
// import * as BooksAPI from './BooksAPI'

const BookShelfChanger = ({ book, updateBooks }) => {
  const moveShelves = ({ target: { value: shelf } }) => updateBooks(book, shelf)

  return (
    <div className="book-shelf-changer">
      <select onChange={moveShelves} id="book-shelf-changer-select" defaultValue={book.shelf || 'none'}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
}
export default BookShelfChanger