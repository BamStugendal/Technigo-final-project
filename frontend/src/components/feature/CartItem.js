import React from 'react'
import { useDispatch } from 'react-redux'
import { cart } from 'reducers/cart'

import { ProductImage, Item } from 'assets/CSS/cartCSS'

export const CartItem = ({ product }) => {
    const dispatch = useDispatch()

    return (
        <li>
            <ProductImage src={product.image} alt={product.title} />
            <div>
                <p>x{product.quantity}</p>
                <p>{product.price * product.quantity} kr</p>
            </div>
            <span>
                <button type="button" onClick={() => dispatch(cart.actions.removeItem(product))}>-</button>
                <button type="button" onClick={() => dispatch(cart.actions.addItem(product))}>+</button>
            </span>
        </li>
    )
}

export default CartItem
