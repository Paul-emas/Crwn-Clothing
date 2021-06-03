import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectCartCounter } from '../../redux/cart/cart.selectors';

import { toggleCartDropdown } from '../../redux/cart/cart-action';

import { ReactComponent as ShoppingBag } from '../../assets/icons/shopping-bag.svg';

import './cart-icon.style.scss';

const CartIcon = ({ toggleCartDropdown, itemCount }) => (
  <div onClick={() => toggleCartDropdown()} className="cart-icon">
    <ShoppingBag className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartCounter,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
