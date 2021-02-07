import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cart } from 'reducers/cart'
import { Link } from "react-router-dom";
import 'assets/CSS/popcart.css'

export const CartPreview = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.cart.items)
    const totalPrice = useSelector(
        state => state.cart.items.reduce((total, item) => total + (item.price * item.quantity), 0)
    )

    return (
        <div className="popcart-section">
                {products.map(product => (
                    <div className="popcart-item-container">
                        <div className="item-info">
                            <p>{product.title}</p>
                            <p>Size: {`${product.width}x${product.height}`}</p>
                        </div>
                        <div className="buttons-container">
                            <button type="button" onClick={() => dispatch(cart.actions.removeItem(product))}>-</button>
                            <p>{product.quantity}</p>
                            <button type="button" onClick={() => dispatch(cart.actions.addItem(product))}>+</button>
                        </div>
                        <div>
                            <p>{product.price * product.quantity} kr</p>
                        </div>
                   </div>
                ))}

            <div className="total">Total: {totalPrice} kr</div>
            <Link to="/cart" className="checkout-btn">
                <button>
                    Go to checkout
                </button>
            </Link>
            <div className="overlay"></div>
        </div>
    )
}
export default CartPreview