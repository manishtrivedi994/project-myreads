import React from 'react'
import Book from './Book'

function CurrentlyReading(props) {
  
  return (

            <div className='bookshelf'>
                <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {props.books.map((book) => {
                            if(book.shelf==='currentlyReading') {
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

export default CurrentlyReading