import React from 'react'
import { Link } from 'react-router-dom'

import 'assets/CSS/product-grid.css'

export const Product = ({ product }) => {

    return (
        <article className={`gallery-container ${product.widthSpan} ${product.heightSpan}`}>
            <div className="gallery-item">
                <Link to={`/posters/${product._id}`}>
                <div className="gallery-image">
                    <img 
                        src={product.image} 
                        alt={product.title}            
                    />
                </div>
                <div className="gallery-text">
                    <h4>{product.title}</h4>
                    <p>{product.price} kr</p>
                </div>
                </Link>
            </div>
        </article>
    )
}

export default Product
