import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item';
import './checkout.style.scss';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckOutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Qunatity</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem, idx) => (
      <CheckoutItem key={idx} item={cartItem} />
    ))}
    <div className="total">TOTAL: ${total}</div>
    <div className="text-warning">
      **Pls use the following test credit card for payment
      <br />
      4242 4242 4242 4242: Expiry Date: 06/21 - CVV: 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = () =>
  createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
  });

export default connect(mapStateToProps)(CheckOutPage);
