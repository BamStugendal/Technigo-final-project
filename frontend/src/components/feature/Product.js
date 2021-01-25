import React from 'react'
import { useDispatch } from 'react-redux'
import { cart } from 'reducers/cart'
import StorePage from './StorePage'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export const Product = ({ product }) => {
    const dispatch = useDispatch()

    return (
        <Link to={`/posters/${product._id}`}>
            <img src={product.image} alt="product.title" />
            <h4>{product.title}</h4>
            <p>{product.price} kr</p>
            <button 
                type="button"
                disabled={product.inevtory === 0}
                onClick={() => dispatch.apply(cart.actions.addItem(product))}>
                Add to cart
            </button>
        </Link>
    )
}

export default Product
