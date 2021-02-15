import React from 'react';
import './CheckoutProduct.css';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating, hideButton}) {

    const [{ basket }, dispatch] = useStateValue()
    let halfRating = (rating - Math.floor(rating)) * 10;

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct_image"/>
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>₹</small>
                    <strong>{price.toLocaleString('en-IN')}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {
                        Array(Math.floor(rating))
                            .fill()
                            .map((_, index) => (
                                <StarIcon key={index} />
                            ))
                    }
                    {
                        (halfRating > 0) ? <StarHalfIcon /> : <></>
                    }
                </div>
                {!hideButton && (
                  <button onClick={removeFromBasket}>Remove From Cart</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
