import React, { Component } from 'react'

class Read extends Component {
    
  state = {
    books: this.props.books
    
  }
 /* changeHandler(bookshelf){
      console.log(bookshelf)
      //console.log(event.target.value)
      
    }*/
     
    render () {
      console.log(this.state.books)
        return (

            <div className='bookshelf'>
                <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map(book => {
                            if(book.shelf==='read') {
                               return (
                                <li>
                                <div className="book" key={book.id}>
                                <div className="book-top">
                                  <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
                                  <div className="book-shelf-changer">
                                    <select >
                                      <option value="move" disabled>Move to...</option>
                                      <option value="currentlyReading">Currently Reading</option>
                                      <option value="wantToRead">Want to Read</option>
                                      <option value="read">Read</option>
                                      <option value="none">None</option>
                                    </select>
                                  </div>
  
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors}</div>
                                <div>{console.log(book.shelf)}</div>
                               </div>
                              </li> 
                               )
                            }
                        })}
                    
                    </ol>
                </div>
            </div>
                


            
        )
    }
}

export default Read