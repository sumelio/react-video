import React from 'react'
import './search.css'
const  Search = (props) => (
    <form onSubmit={props.handleSubmit} className='Search' >
      <input 
        ref={props.setRef}
        type="text" 
        className='Search-input'
        placeholder="Busca tu video"
        onChange={props.handleChange}
        value={props.value}
        />
    </form>
)

export default Search