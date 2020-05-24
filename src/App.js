import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead'
import Read from './Read'
import {Route} from 'react-router-dom'
import SearchBooks from './SearchBooks'
import {Link} from 'react-router-dom'

class App extends Component {
  state = {
    books: []
  }
  
  componentDidMount() {
    BooksAPI
      .getAll()
      .then(books => {
        this.setState({books})
        //console.log(books);
      })
  }
  onShelfChangeHandler = (book, shelf) => {
    book.shelf = shelf
    this.setState(state => ({
      books: state
        .books
        .filter(b => b.id !== book.id)
        .concat([book])
    }))
    BooksAPI.update(book, shelf)
  }
  

  render() {
    
    return (
      <div className="app">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            
              <Route
              path="/"
              exact
              render={() => (
              <div>
              <CurrentlyReading books={this.state.books} onShelfChangeHandler={this.onShelfChangeHandler}/>
              <WantToRead books={this.state.books} onShelfChangeHandler={this.onShelfChangeHandler}/>    
              <Read books={this.state.books} onShelfChangeHandler={this.onShelfChangeHandler}/>
                
              </div>
              )}/>

          <div className="open-search">
            
            <Link to="/search"><button>
            Add a book
            </button>
            </Link>
            
          </div>
            
            <Route
                path="/search"
                render={({history}) => (
                <SearchBooks
                  onShelfChangeHandler={this.onShelfChangeHandler}
                  history={history}
                  books={this.state.books}
                />
                )}
            />
        
      </div>
    )
  }
}

export default App
