import { ADD_TO_CART } from "./actions";
import { CartState } from "./models";

const initialState: CartState = {
  cartItems: [],
  total: 0,
};

export const cartReducer = (
  state: CartState = initialState,
  action: { type: string; payload: any }
): CartState => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, payload.item],
        total: state.total + 1,
      };
    default:
      return state;
  }
};
