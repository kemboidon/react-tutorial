import React from 'react'

const Book=({Image,tittle,Author})=>{
    // console.log(props);
    const clickHandler=()=>{
        alert('hello world')
    }
    
    return<article className='book'>
        <Image src = '{image}' alt = ''></Image>
        <h1>{tittle}</h1>
        <h4>{Author.toUpperCase()}</h4>
        <button type='button' onClick={clickHandler}>reference example</button>
        </article>
}




export default Book

