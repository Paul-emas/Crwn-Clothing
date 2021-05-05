import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import { addCartItem } from "../../redux/cart/cart-action";

import "./collection-item.style.scss";

const CollectionItem = ({ item, addCartItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="image"
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">&#36;{price}</span>
      </div>
      <CustomButton onClick={() => addCartItem(item)}>ADD TO CART</CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (item) => dispatch(addCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
