import React from 'react'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {

  state = { books: [] }

  componentDidMount() {
    BooksAPI.getAll().then(books=> this.setState(_=> ({books}) ))
  }
  // ALTERNATIVE
  // async componentDidMount() {
  //   const books = BooksAPI.getAll()
  //   this.setState(_=> ({books}) )
  // }
  updateBooks = (book, shelf) => {
    BooksAPI.update(book, shelf).then(_=> this.componentDidMount())
  }
  render() {
    return (
      <div className="app">
        <Route exact path='/'>
          <ListBooks books={this.state.books} updateBooks={this.updateBooks} />
        </Route>
        <Route path='/search'>
          <SearchBooks books={this.state.books} updateBooks={this.updateBooks} />
        </Route>
      </div>
    )
  }
}

export default BooksApp
