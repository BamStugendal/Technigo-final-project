import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { cart } from 'reducers/cart'
import 'assets/CSS/Store/cart.css'

export const Cart = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.cart.items)
    const totalPrice = useSelector(
        state => state.cart.items.reduce((total, item) => total + (item.price * item.quantity), 0)
    )

    return (
        <div className='sidecart-section'>
            <div className='cart-item-wrapper'>
                {products.map(product => (
                    <div className='sidecart-item-container' key={product._id}>
                        <div className='item-info'>
                            <p className='item-title'>{product.title}</p>
                            <p>Size: {`${product.width}x${product.height}`} cm</p>
                        </div>
                        <div>
                            {product.price * product.quantity} kr
                        </div>
                        <div className='buttons-container'>
                            <button type='button' onClick={() => dispatch(cart.actions.removeItem(product))}>-</button>
                            <p>{product.quantity}</p>
                            <button type='button' onClick={() => dispatch(cart.actions.addItem(product))}>+</button>
                        </div>
                   </div>
                ))}
            </div>
            <p className='total'>Total: {totalPrice} kr</p>
            <Link to='/checkout' className='checkout-btn'>
                <button>
                    Go to checkout
                </button>
            </Link>
            <div className='overlay'></div>
        </div>
    )
}
export default Cart