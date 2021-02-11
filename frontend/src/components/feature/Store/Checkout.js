import React from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from './CartItem'
import 'assets/CSS/Store/checkout.css'

export const Checkout = () => {
    const products = useSelector(state => state.cart.items)
    const totalPrice = useSelector(
        state => state.cart.items.reduce((total, item) => total + (item.price * item.quantity), 0)
    )

    return (
        <div className="cart-section">
                {products.map(product => (
                    <CartItem key={product._id} product={product} />
                ))}

            Total: {totalPrice}
        </div>
    )
}
export default Checkout