

import { useContext } from 'react';
import Card from './Card';
import { ProductsContext } from '../Context/ProductsContext';
import CardLoadingSkeleton from './CardLoadingSkeleton';



function ProductWrapper({products}) {

    const {loadingProducts} = useContext(ProductsContext)

    return (
        <div className='cards__grid-container'>
            {loadingProducts && <CardLoadingSkeleton cards={9} />}
            {products && products.map( product => {
                return (            
                    <Card 
                        key={product._id}
                        {...product} 
                    />   
                )
            })}
        </div>
    )
}

export default ProductWrapper