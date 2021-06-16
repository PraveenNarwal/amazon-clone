import React from 'react'
import './Product.css'
import StarBorderIcon from '@material-ui/icons/StarBorder';

function Product() {
    return (
        <div className='product'>
            <div className='productInfo'>
                <p>The lean startup</p>
                <p className='productPrice'>
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className='productRating'>
                    <StarBorderIcon />
                    <StarBorderIcon />
                </div>
            </div>
            <img src='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg' alt='product imgae' />
            <button>Add to cart</button>
        </div>
    )
}

export default Product
