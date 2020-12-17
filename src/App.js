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
  updateBooks = (book, shelf) => {
    BooksAPI.update(book, shelf).then(_=> this.componentDidMount())
  }
  render() {
    return (
      <div className="app">
        <Route 
          exact path='/'
          render={()=>( <ListBooks books={this.state.books} updateBooks={this.updateBooks} /> )}
        />
        <Route 
          path='/search'
          render={()=>( <SearchBooks books={this.state.books} updateBooks={this.updateBooks} /> )}
        />
      </div>
    )
  }
}

export default BooksApp
