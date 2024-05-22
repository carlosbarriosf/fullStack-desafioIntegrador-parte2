import React, { useEffect, useState } from 'react'
import { CartContext } from './CartContext'
import { postCart, updateCartById } from '../assets/api';

function CartProvider({children}) {

    const [cartProductList, setCartProductList] = useState(() => {
        const storedCart = localStorage.getItem('storedCart');
        if(!storedCart) return [];
        return JSON.parse(storedCart)
    })

    useEffect(() => {
        localStorage.setItem('storedCart', JSON.stringify(cartProductList))
    }, [cartProductList])

    const [cartId, setCartId] = useState(() => {
        const storedCartId = localStorage.getItem('storedCartId');
        if (storedCartId === 'undefined' || storedCartId === 'null' || !storedCartId) return undefined;
        return storedCartId
    })

    useEffect(() => {
        if (cartId !== undefined && cartId !== null) {
            localStorage.setItem('storedCartId', cartId);
        } else {
            localStorage.removeItem('storedCartId');
        }
    }, [cartId]);



    const addProductToCart =  (items) => {
        if(cartId) {
            updateCartById(cartId, items)
                .then(res => {
                    console.log(res)
                    setCartProductList(res.items)
                })
                .catch(err => console.error(err))

        } else {
            postCart(items)
                .then(res => {
                    setCartId(res._id)
                    setCartProductList(res.items)
                })
                .catch(err => console.error(err))
        }

    };


    const modifyProductQuantity = (id, quantity) => {
        if(quantity !== 0) {
            console.log(quantity)
            updateCartById(
                            cartId,
                            {items: [{
                                quantity,
                                product: id
                            }]}
                        )
                        .then(res => {
                            console.log(res)
                            setCartProductList(res.items)
                        })
                        .catch(err => console.error(err))
        }
    }

    const removeProductFromCart = (id, body) => {
        updateCartById(id, body)
            .then(res => {
                setCartProductList(res.items)
            })
    }

    const purchaseCart = (id) => {
        updateCartById(id, { purchased: true})
            .then(res => {
                setCartId();
                setCartProductList([]);
                localStorage.removeItem('storedCartId')
            })
    }

    return (
        <CartContext.Provider 
            value={
                {cartId,
                cartProductList,
                addProductToCart,
                removeProductFromCart,
                purchaseCart,
                modifyProductQuantity
                }
            }>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider