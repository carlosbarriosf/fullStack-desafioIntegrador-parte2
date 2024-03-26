import React, { useEffect, useState } from 'react'
import { ProductsContext } from './ProductsContext'
import { getProducts } from '../assets/api'


function ProductsProvider({children}) {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts('/products').then(data => setProducts(data)).catch(err => console.log(err))
    
    }, [])

    return (
        <ProductsContext.Provider
            value={
                {products, setProducts}
            }
        >
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider