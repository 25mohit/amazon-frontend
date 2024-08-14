import React from 'react'
import { Link } from 'react-router-dom'

const ProductCarousel = ({ heading }) => {
  return (
    <div className='carousel-section'>
        <div className="head fx aic">
            <h2 className="section-heading">{heading}</h2>
            <Link to='/' className='link'>See more</Link>
        </div>
    </div>
  )
}

export default ProductCarousel