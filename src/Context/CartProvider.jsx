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
        console.log('CartID ahora es: ', cartId);
    }, [cartId]);



    const addProductToCart =  (items) => {
        if(cartId) {
            console.log('estoy en el update')
            console.log(items)
            updateCartById(cartId, items)
                .then(res => {
                    console.log(res)
                    setCartProductList(res.items)
                })
                .catch(err => console.error(err))

        } else {
            postCart(items)
                .then(res => {
                    console.log('estoy aca')
                    console.log(res._id)
                    setCartId(res._id)
                    setCartProductList(res.items)
                })
                .catch(err => console.error(err))
        }

    };

    // const modifyProductQuantity = (_id, quantity) => {
    //     const productToModify = cartProductList.find(existentProduct => existentProduct._id === _id)
    //     if(productToModify) {
    //         setCartProductList(cartProductList.map(existentProduct => {
    //             if (existentProduct._id === _id) {
    //                 return {
    //                     ...existentProduct,
    //                     quantity: quantity,
    //                     subtotal: Number(existentProduct.price) * quantity
    //                 }
    //             }
    //             return existentProduct
    //         }))
    //     }
    // }


    // const removeProductFromCart = _id => setCartProductList(cartProductList.filter(product => product._id !== _id));

    const removeProductFromCart = (id, body) => {
        updateCartById(id, body)
            .then(res => {
                console.log(res)
                setCartProductList(res.items)
            })
    }

    const purchaseCart = (id) => {
        updateCartById(id, { purchased: true})
            .then(res => {
                console.log(res)
                setCartId();
                setCartProductList([]);
                console.log(localStorage.getItem('storedCartId'))
                localStorage.removeItem('storedCartId')
                console.log(localStorage.getItem('storedCartId'))
            })
    }

    return (
        <CartContext.Provider 
            value={
                {cartId,
                cartProductList,
                addProductToCart,
                removeProductFromCart,
                purchaseCart
                // modifyProductQuantity
                }
            }>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider