import React from 'react'
import reactDom from 'react-dom'

// css
import './index.css'
import {data} from './books'
import Book from './Book'

function BookList(){
    return(
    <section className='booklist'>
        {data.map((book,index)=>{
            return<Book key={book.id}{...book}></Book>
        })}

        
    </section>
    )
}



reactDom.render(<BookList/>,document.getElementById('root'))