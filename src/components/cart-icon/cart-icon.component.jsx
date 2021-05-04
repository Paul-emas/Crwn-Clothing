import React from "react";
import { connect } from "react-redux";

import { toggleCartDropdown } from "../../redux/cart/cart-action";

import { ReactComponent as ShoppingBag } from "../../assets/icons/shopping-bag.svg";

import "./cart-icon.style.scss";

const CartIcon = ({ toggleCartDropdown }) => (
  <div onClick={() => toggleCartDropdown()} className="cart-icon">
    <ShoppingBag className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
