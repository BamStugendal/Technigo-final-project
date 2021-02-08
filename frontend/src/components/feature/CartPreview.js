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
            <div className="cart-item-ctn">
                {products.map(product => (
                    <div className="popcart-item-container">
                        <div className="item-info">
                            <p className="item-title">{product.title}</p>
                            <p>Size: {`${product.width}x${product.height}`} cm</p>
                        </div>
                        <div className="buttons-container">
                            <button type="button" onClick={() => dispatch(cart.actions.removeItem(product))}>-</button>
                            <p>{product.quantity}</p>
                            <button type="button" onClick={() => dispatch(cart.actions.addItem(product))}>+</button>
                        </div>
                        <div className="tmp">
                            <p>{product.price * product.quantity} kr</p>
                        </div>
                   </div>
                ))}
            </div>
            <p className="total">Total: {totalPrice} kr</p>
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