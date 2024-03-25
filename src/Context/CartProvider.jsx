import React, { useState } from 'react'
import { CartContext } from './CartContext'

function CartProvider({children}) {

    const [cartProductList, setCartProductList] = useState([])

    const addProductToCart = product => {
        if (product.quantity > 0) {
            const existentProduct = cartProductList.find(existentProduct => existentProduct.id === product.id)
            console.log(existentProduct)
            if (existentProduct) {
                setCartProductList(cartProductList.map(existentProduct => {
                    if(existentProduct.id === product.id) {
                        existentProduct.quantity = existentProduct.quantity + product.quantity
                    }
                    return existentProduct 
                }))
            } else {
                setCartProductList([...cartProductList, product])
            }
        }
    };
    const removeProductFromCart = id => setCartProductList(cartProductList.filter(product => product.id !== id));


    return (
        <CartContext.Provider 
            value={
                {cartProductList,
                addProductToCart,
                removeProductFromCart}
            }>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider