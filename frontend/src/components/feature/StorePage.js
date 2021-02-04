import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from "react-router-dom";

import { products } from 'reducers/products'
import 'assets/CSS/product-grid.css'
import { Product } from './Product'

const StorePage = () => {
    const ALL_POSTERS_URL = 'http://localhost:8080/posters'
    const allPosters = useSelector(state => state.products.items)
    const dispatch = useDispatch()

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
        <>
        
        <section className="gallery-section">
        
            {allPosters.map(product => (
                <Product 
                    key={product._id} 
                    product={product} />
            ))}
            
        </section>
        
        </>
    )
}

export default StorePage
