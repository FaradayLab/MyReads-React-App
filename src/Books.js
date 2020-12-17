import React from 'react'
import BookShelfChanger from './BookShelfChanger'

const Book = ({ book, updateBooks }) => {
  const authors = book.authors ? book.authors.join(', ') : 'Unknown'
  const cover = { 
    width:128, 
    height:192, 
    backgroundImage: `url(${book.imageLinks ? 
      book.imageLinks.smallThumbnail : 
      './img/no-cover.png'})` // Link no cover properly
  }

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={cover}></div>
          <BookShelfChanger book={book} updateBooks={updateBooks} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    </li>
  )
}
export default Book
