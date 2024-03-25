import React from 'react'
import SearchBar from '../Components/SearchBar'
import ProductWrapper from '../Components/ProductWrapper'

function Home() {
  return (
    <div className='container'>
      <SearchBar />
      <ProductWrapper />
    </div>
  )
}

export default Home