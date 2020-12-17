import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Books'

class SearchBooks extends React.Component {
  state = {
    booksOnShelf: this.props.books,
    booksOnShelfIDs: this.props.books.map(book=>book.id),
    books: [],
  }
  addShelves = searchBooks => {
    searchBooks.forEach((book,i) => {
      const ind = this.state.booksOnShelfIDs.indexOf(book.id)
      ind !== -1 && (searchBooks[i].shelf = this.state.booksOnShelf[ind].shelf)
    });
    return searchBooks
  }
  searchBooks = ({ target: { value }}) =>{
    if(value)
      BooksAPI.search(value).then(books=> 
        books.length ? (books = this.addShelves(books)) && this.setState(()=> ({ books })) : this.setState(()=> ({books: []})))
     else 
      this.setState(()=> ({books: []}))
  }
  
  render(){
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to='/' 
            className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input onChange={this.searchBooks} type="text" placeholder="Search by title or author"/>

          </div>
        </div>
        <div className="search-books-results">

          <ol className="books-grid">
            {this.state.books.length ? (
                this.state.books.map(book => (<Book key={book.id} book={book} updateBooks={this.props.updateBooks} />))
              ) : (
                <p>No books were found</p>
              )
            }
          </ol>
        </div>
      </div>
    )
  }
}
export default SearchBooks
