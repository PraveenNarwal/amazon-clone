import React from 'react'
import './Product.css'
import StarBorderIcon from '@material-ui/icons/StarBorder';

function Product({ title, image, price, rating }) {
    return (
        <div className='product'>
            <div className='productInfo'>
                <p>{title}</p>
                <p className='productPrice'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='productRating'>
                    {Array(rating).fill().map((_, i) => (
                        <StarBorderIcon />
                    ))}


                </div>
            </div>
            <img src={image} alt='product imgae' />
            <button>Add to cart</button>
        </div>
    )
}

export default Product
