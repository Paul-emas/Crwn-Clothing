import CartType from "./cart-type";
import { addItem, removeItem } from "./cart.utlis";

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
        cartItems: addItem(state.cartItems, action.payload),
      };
    case CartType.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id),
      }
    case CartType.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload),
      }
    default:
      return state;
  }
};

export default cartReducer;
