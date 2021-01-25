import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from 'reducers/products'
import { useDispatch, useSelector } from 'react-redux'

export const ProductDescription = () => {
    const [poster, setPoster] = useState({tags: ['tag1', 'tag2']})

    const dispatch = useDispatch()
    const {id} = useParams()

    const POSTER_URL = `http://localhost:8080/posters/${id}`
     const festchPosterInfo = () => {
         
         fetch(POSTER_URL)
         .then((res) => {
             if (!res.ok) {
               throw 'Network response was not ok'
             }
             return res.json()
           })
           .then((res) => setPoster(res))
           .catch((err) => console.error(err))
     }

     useEffect(festchPosterInfo, [id])
    const tags = poster.tags
    return (
        <div>
            <h4>{poster.title}</h4>
            <img src={poster.image} alt="poster.title" />
            <p>{poster.price} kr</p>

            <p>{poster.description}</p>
            <p>{`${poster.width} x ${poster.height} cm`}</p>
            <p>{poster.category}</p>
            {tags.map(tag => (
                <li>{tag}</li>
            ))}
        </div>
    )
}

export default ProductDescription
