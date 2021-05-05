import CartType from "./cart-type";
import { addCartItem } from "./cart.utlis";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartType.TOGGLE_CHECKOUT_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartType.ADD_ITEM:
      return {
        ...state,
        cartItems: addCartItem(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
