import CartType from "./cart-type";

export const toggleCartDropdown = () => ({
  type: CartType.TOGGLE_CHECKOUT_DROPDOWN,
});

export const addCartItem = (item) => ({
  type: CartType.ADD_ITEM,
  payload: item,
});

export const removeCartItem = (item) => ({
  type: CartType.REMOVE_ITEM,
  payload: item
});

export const clearItem = item => ({
  type: CartType.CLEAR_ITEM_FROM_CART,
  payload: item
}) 