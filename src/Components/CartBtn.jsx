import React, { useContext } from 'react'
import Button from './Button'
import { FaCartShopping } from 'react-icons/fa6'
import { CartContext } from '../Context/CartContext'

function CartBtn({className}) {

    const { cartProductList } = useContext(CartContext)

    return (
      <div className='header__cart-container'>
          <Button
              type='button'
              // action={}
              className={className}
              icon={<FaCartShopping />}
          />
          <div className='header__cart-count'>
            {cartProductList.length > 0 ? cartProductList.length : undefined}
          </div>
      </div>
    )
}

export default CartBtn