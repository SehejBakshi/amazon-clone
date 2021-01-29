import React from 'react';
import './Payment.css';
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import {Link} from "react-router-dom";

function Payment() {
  const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className='payment_container'>
        <h1>
          Checkout (
            {<Link to="/checkout/">{basket?.length} items </Link>}
          )
        </h1>


        {/* Payment section - delivery address */}
        <div className='payment_section'>
          <div className='payment_title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment_address'>
            <p>{user?.email}</p>
            <p>Address line 1</p>
            <p>Address line 2</p>
          </div>
        </div>

        {/* Payment section - review items */}
        <div className='payment_section'>
          <div className='payment_title'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='payment_items'>
            {basket.map(item => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment section - payment method */}
        <div className='payment_section'>
          <div className='payment_title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment_details'>
            {/* Stripe */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
