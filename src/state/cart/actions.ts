export const ADD_TO_CART = "ADD_TO_CART";

export const addToCartAction = (item: any) => ({
  type: ADD_TO_CART,
  payload: item,
});
