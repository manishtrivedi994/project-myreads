import React from 'react'
import Book from './Book'

function WantToRead(props) {
  
  return (

            <div className='bookshelf'>
                <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {props.books.map((book) => {
                            if(book.shelf==='wantToRead') {
                               return <li key={book.id}>
                               <Book book={book} onShelfChangeHandler={props.onShelfChangeHandler}/>
                              </li>
                            }
                        })}
                    
                    </ol>
                </div>
            </div>
                


            
        )
    
}

export default WantToRead