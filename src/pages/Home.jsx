import React, { useContext, useEffect, useState } from 'react'
import SearchBar from '../Components/SearchBar'
import ProductWrapper from '../Components/ProductWrapper'
import { ProductsContext } from '../Context/ProductsContext'
import Footer from '../Components/Footer'

function Home() {

    const { products } = useContext(ProductsContext)
    //check if this context is really used, and if not, remove it and
    //move the logic for the products array here

    const [searchInput, setSearchInput] = useState('')
    const [filteredProducts, setFilteredProducts] = useState(products)

    // useEffect(() => {
    //   setFilteredProducts(products.filter(product => product.name.toLowerCase().includes(searchInput.toLowerCase())))
    // }, [searchInput, products])

  return (
    <div className='container home'>
      <div className='home__controls'>
        <SearchBar value={searchInput} action={(e) => setSearchInput(e.target.value)} />
      </div>
      <ProductWrapper products={products} />
      <Footer />
    </div>
  )
}

export default Home