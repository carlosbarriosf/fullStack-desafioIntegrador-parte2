import React, { useEffect, useState } from 'react'
import { CartContext } from './CartContext'

function CartProvider({children}) {

    const [cartProductList, setCartProductList] = useState(() => {
        const storedCart = localStorage.getItem('storedCart')
        if(!storedCart) return []
        return JSON.parse(storedCart)
    })

    useEffect(() => {
        localStorage.setItem('storedCart', JSON.stringify(cartProductList))
    }, [cartProductList])

    const addProductToCart = product => {
        if (product.quantity > 0) {
            const existentProduct = cartProductList.find(existentProduct => existentProduct._id === product._id)
            if (existentProduct) {
                setCartProductList(cartProductList.map(existentProduct => {
                    if(existentProduct._id === product._id) {
                        existentProduct.quantity = existentProduct.quantity + product.quantity
                        existentProduct.subtotal = existentProduct.quantity * Number(existentProduct.price)
                    }
                    return existentProduct 
                }))
            } else {
                setCartProductList([...cartProductList, product])
            }
        }
    };

    const modifyProductQuantity = (_id, quantity) => {
        const productToModify = cartProductList.find(existentProduct => existentProduct._id === _id)
        if(productToModify) {
            setCartProductList(cartProductList.map(existentProduct => {
                if (existentProduct._id === _id) {
                    return {
                        ...existentProduct,
                        quantity: quantity,
                        subtotal: Number(existentProduct.price) * quantity
                    }
                }
                return existentProduct
            }))
        }
    }


    const removeProductFromCart = _id => setCartProductList(cartProductList.filter(product => product._id !== _id));


    return (
        <CartContext.Provider 
            value={
                {cartProductList,
                addProductToCart,
                removeProductFromCart,
                modifyProductQuantity
                }
            }>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider