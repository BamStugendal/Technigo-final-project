import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cart } from 'reducers/cart'
import 'assets/CSS/Store/product-details.css'

export const ProductDescription = () => {
    const dispatch = useDispatch()
    const [product, setProduct] = useState([])
    const { id } = useParams()
    const tags = product.tags ? product.tags : []

    const POSTER_URL = `http://localhost:8080/posters/${id}`

    const fetchPosterInfo = () => {
        fetch(POSTER_URL)
        .then((res) => {
            if (!res.ok) {
            throw new Error('Network response was not ok')
            }
            return res.json()
            })
        .then((res) => setProduct(res))
        .catch((err) => console.error(err))
    }

    useEffect(fetchPosterInfo, [id])

    return (
        <section className='d-ctn'>
            <section className='details-section'>
                <div className='details-container'>
                    <div className='container'>
                        <div className='vertical'>
                            <h4 className='product-title'>{product.title} <p className='product-category'>{product.category}</p></h4>
                        </div>
                        <div className='details'>
                            <p>{`${product.width} x ${product.height} cm`}</p>
                            <p>{product.price} kr</p>
                            <button
                                type='button'
                                onClick={() => dispatch(cart.actions.addItem(product))}>
                                Add to cart
                            </button>
                            <p className='description'>{product.description}</p>
                            <div className='tag-container'>
                                {tags.map(tag => (
                                    <li key={tag}>{tag}</li>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <a href='#test'>
                    <div className='scroll-down'></div>
                </a>
                <img src={product.image} alt={product.title }/>
            </section>
            <section id='test'>helllo testing testing</section>
        </section>
    )
}
export default ProductDescription