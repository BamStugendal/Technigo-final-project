import React from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from './CartItem'
import 'assets/CSS/cart.css'

export const Cart = () => {
    const products = useSelector(state => state.cart.items)
    const totalPrice = useSelector(
        state => state.cart.items.reduce((total, item) => total + (item.price * item.quantity), 0)
    )

    return (
        <div className="cart-section">
            
            <ul>
                {products.map(product => (
                    <CartItem key={product._id} product={product} />
                ))}
            </ul>
            Total: {totalPrice}
        </div>
    )
}
export default Cart