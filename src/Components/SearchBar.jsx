import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'

function SearchBar() {
  return (
    <div className='searchBar'>
        <FaMagnifyingGlass size={20} />
        <input type="text" placeholder='Buscar en la tienda'/>
    </div>
  )
}

export default SearchBar