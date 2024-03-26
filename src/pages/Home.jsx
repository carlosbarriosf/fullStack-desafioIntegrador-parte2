import React, { useContext, useEffect, useState } from 'react'
import SearchBar from '../Components/SearchBar'
import ProductWrapper from '../Components/ProductWrapper'
import { ProductsContext } from '../Context/ProductsContext'

function Home() {

    const { products } = useContext(ProductsContext)
    //check if this context is really used, and if not, remove it and
    //move the logic for the products array here

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