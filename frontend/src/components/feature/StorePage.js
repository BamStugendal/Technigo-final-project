import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { products } from 'reducers/products'
import { Product } from './Product'

const StorePage = () => {
    const allPosters = useSelector(state => state.products.items)
    console.log(allPosters)

    const dispatch = useDispatch()
    const handlePosterSuccess = (res) => {
        console.log(res)
        dispatch(products.actions.setItem(res))
      }
    
      const handlePosterFaild = (json) => {
        dispatch(products.actions.setItem({ json }))
      }

    

    const handlePoster = (event) => {
        const ALL_POSTERS_URL = 'http://localhost:8080/posters'
        fetch(ALL_POSTERS_URL)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok')
            }
            return res.json()
          })
          .then((res) => handlePosterSuccess(res))
          .catch((err) => handlePosterFaild(err))
    }

    useEffect(handlePoster, [])

    return (
        <div>
            {allPosters.map(product => (
                <Product 
                    key={product._id} 
                    product={product} />
            ))} 
        </div>
    )
}

export default StorePage
