import React, { useContext, useEffect, useState } from 'react'
import Button from './Button'
import { FaCartShopping } from 'react-icons/fa6'
import { CartContext } from '../Context/CartContext'
import CartItem from './CartItem'


function CartBtn({className}) {

    const { cartProductList } = useContext(CartContext)

    const [isOpen, setIsOpen] = useState(false)

    function openModal (isOpen) {
      const modal = document.querySelector('[data-modal]');
      if(isOpen) {
        modal.showModal();
      } else {
        modal.close()
      }
    }

    const clickOutsideModal = e => {
      const modal = document.querySelector('[data-modal]');
      const modalDimensions = modal.getBoundingClientRect();
      if(
        e.clientX < modalDimensions.left ||
        e.clientX > modalDimensions.right ||
        e.clientY < modalDimensions.top ||
        e.clientY > modalDimensions.bottom
      ) {
        modal.close()
      }
    }

    useEffect(() => {
      openModal(isOpen)
    }, [isOpen])

    return (
      <div className='cart-container'>
          <Button
              type='button'
              action={() => {
                setIsOpen(currentValue => !currentValue);
              }}
              className={className}
              icon={<FaCartShopping />}
          />
          <div className='cart__count'>
            {cartProductList.length > 0 ? cartProductList.length : undefined}
          </div>
          <dialog 
            data-modal 
            className='cart__modal'
            onClick={(e) => clickOutsideModal(e) }
          >
              <Button
                type='button'
                action={() => setIsOpen(currentValue => !currentValue)}
                className='cart__closeBtn'
                label='&times;'
              />
              <h2 className='cart__title'>Su orden:</h2>
              {cartProductList.map(product => {
                return (
                  <CartItem 
                    key={product.id}
                    {...product}
                  />
                )
              })}
          </dialog>
      </div>
    )
}

export default CartBtn