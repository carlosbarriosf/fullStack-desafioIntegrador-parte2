

import Card from './Card';



function ProductWrapper({products}) {

    return (
        <div className='cards__grid-container'>
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