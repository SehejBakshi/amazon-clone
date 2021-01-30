import React from 'react'
import './Product.css'
import StarIcon from '@material-ui/icons/Star';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarOutlineIcon from '@material-ui/icons/StarBorder';
import { useStateValue } from './StateProvider';

function Product({ id, title, price, rating, image }) {

    const [{ basket }, dispatch] = useStateValue();

    let halfRating = (rating - Math.floor(rating)) * 10;
    let outline = 0;

    halfRating > 0 ? outline = (5 - Math.ceil(rating)) : outline = (5 - Math.floor(rating))

    const addToBasket = () => {
        // Add item to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                    id: id,
                    title: title,
                    image: image,
                    price: price,
                    rating: rating,
                  },
        })
        toast.info(`${title} added worth ₹${price}`, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
    }

    return (
        <div className="product">
            <img src={image} alt={title} />
            <div className="product_info">
                <p>{title}</p>
                <div className="product_group">
                    <p className="product_price">
                        <small>₹</small>
                        <strong>{price.toLocaleString('en-IN')}</strong>
                    </p>
                    <div className="product_rating">
                        {
                            Array(Math.floor(rating)).fill().map((_, i) => (
                                    <StarIcon />
                                ))
                        }
                        {
                            (halfRating > 0) ? <StarHalfIcon /> : <></>
                        }
                        {
                            outline > 0 ? (
                                Array(outline)
                                    .fill()
                                    .map((_, i) => (
                                        <StarOutlineIcon />
                                    ))
                            )
                                : ""
                        }
                    </div>
                </div>
            </div>

            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product
