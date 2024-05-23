import React, { useEffect, useState } from 'react'
import { ProductsContext } from './ProductsContext'
import { getProducts } from '../assets/api'


function ProductsProvider({children}) {

    const [products, setProducts] = useState([])

    const [loadingProducts, setLoadingProducts] = useState(true)

    useEffect(() => {
        getProducts('/products')
            .then(data => {
                    setProducts(data)
                    setLoadingProducts(false)
                    }
                )
            .catch(err => console.log(err))
    }, [])

    return (
        <ProductsContext.Provider
            value={
                {products, setProducts, loadingProducts, setLoadingProducts}
            }
        >
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider