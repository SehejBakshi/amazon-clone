import React from 'react';
import "./Product.css";
import StarRateIcon from '@material-ui/icons/StarRate';

function Product({ id, title, image, price, rating }) {
  return (
    <div className='product'>
      <div className="product_info">
        <p>{title}</p>
        <p className='product_price'>
          <small>Rs</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating).fill().map((_, i) => (
            <StarRateIcon />
          ))}
        </div>
      </div>

      <img
        src={image}
        alt=""
      />

      <button>Add to Cart</button>
    </div>
  )
}

export default Product
