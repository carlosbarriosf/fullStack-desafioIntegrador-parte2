import React, { useContext, useEffect, useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import Counter from './Counter'
import { CartContext } from '../Context/CartContext'
import Button from './Button'

function CartItem({_id, name, image, quantity, price, subtotal}) {

    const { modifyProductQuantity, removeProductFromCart } = useContext(CartContext)

    const [updatedQuantity, setUpdatedQuantity] = useState(quantity)


    const increment = () => {
        setUpdatedQuantity(currentValue => currentValue + 1)
    }
  
    const decrement = () => {
        setUpdatedQuantity(currentValue => currentValue > 1 ? currentValue - 1 : currentValue)
    }


    useEffect(() => {
        setUpdatedQuantity(quantity)
    }, [quantity])

    return (
        <div className='cart__item'>
            <div className='cart__item-description'>
                <p className='cart__item-name'>{`${name}`}</p>
                <div className='cart__item-quantity-container' >
                    <p>Cantidad: <span className='cart__item-currentQuantity'>{quantity}</span></p>
                    <Counter
                        quantity={updatedQuantity}
                        increment={() => {
                            increment()
                            modifyProductQuantity(_id, updatedQuantity + 1)
                        }}
                        decrement={() => {
                            decrement();
                            if (updatedQuantity > 1) {
                                modifyProductQuantity(_id, updatedQuantity - 1)
                            }
                        }}
                        counterControlStyle='cart__item-quantityControl'
                        counterQuantityStyle='cart__item-quantity'
                    />
                </div>
                <p className='cart__item-price'>{`Precio por unidad: $${price}`}</p>
                <p className='cart__item-subtotal'>{`Subtotal: $${subtotal}`}</p>
                <Button 
                    type='button'
                    action={() => {removeProductFromCart(_id)}}
                    className='cart__item-deleteBtn'
                    icon={<RiDeleteBin6Line />}
                />
            </div>
            <div className="cart__item-image">
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default CartItem