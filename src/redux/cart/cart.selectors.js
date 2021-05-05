import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartCounter = createSelector([selectCart], (cart) =>
  cart.cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);