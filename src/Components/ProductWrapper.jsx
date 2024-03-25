

import Card from './Card';



function ProductWrapper({products}) {

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