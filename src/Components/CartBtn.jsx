import React, { useContext, useEffect, useState } from 'react'
import Button from './Button'
import { FaCartShopping } from 'react-icons/fa6'
import { CartContext } from '../Context/CartContext'
import CartItem from './CartItem'
import { FaCheckCircle } from 'react-icons/fa'


function CartBtn({className}) {

    const { cartProductList, purchaseCart, cartId } = useContext(CartContext)

    const [isOpen, setIsOpen] = useState(false)

    const [purchaseCompleted, setPurchaseCompleted] = useState(false)

    
    const cartModal = document.querySelector('[data-modal]');
    const purchaseModal = document.querySelector('[data-purchase-modal]');
    function openModal (isOpen, modal) {
      if(modal) {
        if(isOpen) {
          modal.showModal();
        } else {
          modal.close()
        }
      }
    }
    const clickOutsideModal = (e, modal) => {
      const modalDimensions = modal.getBoundingClientRect();
      if(
        e.clientX < modalDimensions.left ||
        e.clientX > modalDimensions.right ||
        e.clientY < modalDimensions.top ||
        e.clientY > modalDimensions.bottom
      ) {
        modal.close()
        setIsOpen(false)
        setPurchaseCompleted(false)
      }
    }

    useEffect(() => {
      openModal(isOpen, cartModal)
    }, [isOpen])

    useEffect(() => {
      openModal(purchaseCompleted, purchaseModal)
    }, [purchaseCompleted])

    useEffect(() => {
      console.log(cartProductList)
    }, [cartProductList])

    

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
            onClick={(e) => clickOutsideModal(e, cartModal) }
          >
            <Button
              type='button'
              action={() => setIsOpen(currentValue => !currentValue)}
              className='cart__closeBtn'
              label='&times;'
            />
            {cartProductList.length === 0 ?
              <h2>Su carrito está vacío</h2> 
              :
              <h2 className='cart__title'>Su orden:</h2>
            }
            {cartProductList.map(item => {
              return (
                <CartItem 
                  key={item._id}
                  quantity={item.quantity}
                  {...item.product}
                />
              )
            })}
            {
              cartProductList.length > 0 ?
              <>
                <h3>
                  Total a pagar: ${cartProductList.map(item => {
                    return item.quantity * item.product.price
                  })
                    .reduce((accumulator, currentValue) => {
                      console.log(accumulator + currentValue)
                      return accumulator + currentValue
                    })}
                </h3>
                <div className='cart__purchaseBtn-container'>
                  <Button
                    type='button'
                    action={() => {
                      console.log(cartProductList)
                      purchaseCart(cartId)
                      setIsOpen(false)
                      setPurchaseCompleted(true)
                    }}
                    label='Comprar'
                    className='cart__purchaseBtn'
                  />
                </div>
              </>
              
              :
              undefined
            }
          </dialog>
          <dialog
            data-purchase-modal
            className='purchaseModal'
            onClick={(e) => {
              clickOutsideModal(e,purchaseModal)
            } }
          >
            <Button
              type='button'
              action={() => setPurchaseCompleted(currentValue => !currentValue)}
              className='cart__closeBtn'
              label='&times;'
            />
            Compra realizada con éxito!
            <div className='check'>
              <FaCheckCircle size={50}/>
            </div>
          </dialog>
      </div>
    )
}


export default CartBtn