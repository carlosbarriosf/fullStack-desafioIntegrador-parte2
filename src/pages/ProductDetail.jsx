import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getProducts } from '../assets/api'
import Button from '../Components/Button'


function ProductDetail() {
    
    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        getProducts(`/products/${id}`).then(data => setProduct(data)).catch(err => console.log(err))
    }, [id])

    console.log(product)

    return (
        <div className='container'>
            <h2 className='productDetail__title'>{product.name}</h2>
            <p className='productDetail__description'>{product.longDesc}</p>
            <div className="productDetail-container">
                <div className='productDetail__info'>
                <p className='productDetail__price'>${product.price}</p>
                    <p>Marca: {product.brand}</p>
                    <p>Categoría: {product.category}</p>
                    <p>Envío gratis: {product.freeShipping ? 'Disponible' : 'No disponible'}</p>
                    <p>En stock: {product.stock}</p>
                    <p className='productDetail__age'>Desde {product.ageFrom} hasta {product.ageTo} años</p>
                </div>
                <div className='productDetail__image-container'>
                    <div>
                        <img src={product.image} alt={`Imagen de muestra de ${product.name}`} />
                    </div>
                </div>
            </div>
            <div className='cartBtn-container'>
                <Button
                    type='button'
                    // action={}
                    className='cartBtn__add'
                    label='Añadir al carrito'
                />
            </div>
        </div>
    )
}

export default ProductDetail