import { combineReducers } from "redux";

import { cartReducer } from "./cart/reducer";
import { CartState } from "./cart/models";

export interface StateModel {
  cart: CartState;
}

export const rootReducer = combineReducers({
  cart: cartReducer,
});
