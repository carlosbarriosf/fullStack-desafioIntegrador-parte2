import React, { useContext, useEffect, useState } from 'react'
import SearchBar from '../Components/SearchBar'
import ProductWrapper from '../Components/ProductWrapper'
import { ProductsContext } from '../Context/ProductsContext'

function Home() {

    const { products } = useContext(ProductsContext)

    const [searchInput, setSearchInput] = useState('')
    const [filteredProducts, setFilteredProducts] = useState(products)
    console.log(products)

    useEffect(() => {
      setFilteredProducts(products.filter(product => product.name.toLowerCase().includes(searchInput.toLowerCase())))
    }, [searchInput, products])

  return (
    <div className='container'>
      <SearchBar value={searchInput} action={(e) => setSearchInput(e.target.value)} />
      <ProductWrapper products={filteredProducts} />
    </div>
  )
}

export default Home