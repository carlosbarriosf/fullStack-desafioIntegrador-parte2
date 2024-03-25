import React, { useEffect, useState } from 'react'
import { getProducts } from '../assets/api'
import Card from './Card';


function ProductWrapper() {

    
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(data => setProducts(data)).catch(err => console.log(err))
    
    }, [])
    

    return (
        <div className='cards__grid-container'>
            {products.map( product => {
                return (            
                    <Card 
                        key={product.id}
                        {...product} 
                    />   
                )
            })}
        </div>
    )
}

export default ProductWrapper