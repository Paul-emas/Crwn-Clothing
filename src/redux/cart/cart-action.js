import CartType from "./cart-type";

export const toggleCartDropdown = () => ({
  type: CartType.TOGGLE_CHECKOUT_DROPDOWN,
});

export const addCartItem = (item) => ({
  type: CartType.ADD_ITEM,
  payload: item,
});
