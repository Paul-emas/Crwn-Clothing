import React from 'react';
import { connect } from 'react-redux';

import {
  addCartItem,
  removeCartItem,
  clearItem,
} from '../../redux/cart/cart-action';

import './checkout-item.style.scss';

const CheckoutItem = ({
  item,
  dispatch,
  addCartItem,
  removeCartItem,
  clearItem,
}) => {
  const { name, quantity, price, imageUrl } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="arrow" onClick={() => removeCartItem(item)}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={() => addCartItem(item)}>
          &#10095;
        </span>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => clearItem(item)}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (item) => dispatch(addCartItem(item)),
  removeCartItem: (item) => dispatch(removeCartItem(item)),
  clearItem: (item) => dispatch(clearItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
