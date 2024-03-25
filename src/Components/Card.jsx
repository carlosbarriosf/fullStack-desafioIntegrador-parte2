import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { FaCartPlus } from 'react-icons/fa6'
import Counter from './Counter'
import { CartContext } from '../Context/CartContext'

function Card({id, name, image, shortDesc, price}) {

    const [quantity, setQuantity] = useState(0)

    const increment = () => {
      setQuantity(currentValue => currentValue + 1)
    }

    const decrement = () => {
      setQuantity(currentValue => currentValue > 0 ? currentValue - 1 : currentValue)
    }

    const { addProductToCart, cartProductList } = useContext(CartContext)

    const [messageVisible, setMessageVisible] = useState(false)

    const [className, setClassName] = useState('opacityIncrease')


    useEffect(() => {
      console.log(cartProductList)
    
    }, [cartProductList])
    

    return (
        <div className='cards__card'>
            <Link><img src={image} alt={`Imagen ilustrativa del producto`} /></Link>
            <div className='cards__card-description'>
                <Link>
                    <h2>{name}</h2>
                </Link>
                <p>{shortDesc}</p>
                <div className='cards__card-price'>
                    {`$${price}`}
                </div>
                <div className="cards__card-counter">
                    <Counter quantity={quantity} increment={increment} decrement={decrement} />
                    <Button 
                        type='button'
                        action={() => {
                            addProductToCart({
                                id,
                                quantity,
                                name,
                                price,
                                subtotal: Number(price) * quantity
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
                        className='cards__card-cart'
                        icon={<FaCartPlus />}
                    />
                </div>
            </div>
            {messageVisible ? <div className={`cartUpdate-msg ${className}`}>{`Se añadieron ${quantity} ${name} al carrito`}</div> : undefined}
        </div>
    )
}

export default Card