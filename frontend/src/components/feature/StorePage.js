import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { products } from 'reducers/products'
import { Product } from './Product'
import 'assets/CSS/Store/product-grid.css'

const StorePage = () => {
    const dispatch = useDispatch()
    const allPosters = useSelector(state => state.products.items)
    
    const ALL_POSTERS_URL = 'https://b-studio.herokuapp.com//posters'

    const FetchPosters = () => {
        fetch(ALL_POSTERS_URL)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok')
            }
            return res.json()
          })
          .then((res) => dispatch(products.actions.setItem(res)))
          .catch((err) => console.log(err))
    }

    useEffect(FetchPosters, [])
    
    return (
        <section className='gallery-section'>
            {allPosters.map(product => (
                <Product 
                    key={product._id} 
                    product={product} />
            ))}
        </section>
    )
}
export default StorePage
