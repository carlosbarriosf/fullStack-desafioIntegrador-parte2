import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { getProductsById } from '../assets/api'
import Button from '../Components/Button'
import { CartContext } from '../Context/CartContext'
import Counter from '../Components/Counter'
import Footer from '../Components/Footer'
import DetailSkeleton from '../Components/DetailSkeleton'




function ProductDetail() {
    
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [messageVisible, setMessageVisible] = useState(false)
    const [className, setClassName] = useState('opacityIncrease')
    const [quantity, setQuantity] = useState(0)

    const [isLoading, setIsLoading] = useState(true)

    const increment = () => {
      setQuantity(currentValue => currentValue + 1)
    }

    const decrement = () => {
      setQuantity(currentValue => currentValue > 0 ? currentValue - 1 : currentValue)
    }


    useEffect(() => {
        console.log(id)
        getProductsById(`/products/${id}`)
            .then(data => {
                setProduct(data)
                setIsLoading(false)
                }
            )
            .catch(err => console.log(err))
    }, [id])

    console.log(product)

    const { addProductToCart } = useContext(CartContext)

    return (
        <div className='container home'>
            <Link to='/' className='goBackBtn'>
                Volver a la tienda
            </Link>
            {isLoading ?
                <DetailSkeleton />
                :
                <div className='productDetail'>
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
                    <div className='productDetail__cartControls'>
                        <Counter
                            quantity={quantity}
                            increment={increment}
                            decrement={decrement}
                            counterControlStyle='counter__control'
                            counterQuantityStyle='counter__quantity'
                        />
                        <div className='cartBtn-container'>
                            <Button
                                type='button'
                                action={() => {
                                    addProductToCart({
                                        items: [{
                                            quantity,
                                            product: id
                                        }]
                                    })
                                    if (quantity > 0) {
                                        setMessageVisible(true)
                                        setTimeout(() => {
                                            setClassName('opacityDecrease')
                                        }, 3000);
                                        setTimeout(() => {
                                            setMessageVisible(false)
                                            setClassName('opacityIncrease')
                                        }, 3300);
                                    }
                                }}
                                className='cartBtn__add'
                                label='Añadir al carrito'
                            />
                        </div>
                    </div>
                </div>
                
            }
            {messageVisible ? <div className={`cartUpdate-msg ${className}`}>{`Se añadieron ${quantity} ${product.name} al carrito`}</div> : undefined}
            <Footer />
        </div>
    )
}

export default ProductDetail