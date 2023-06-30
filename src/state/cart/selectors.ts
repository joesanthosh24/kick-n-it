import { CombinedState, Reducer } from "redux";

import { StateModel } from "../root-reducer";

export const selectTotalCartItems = (state: StateModel) => state.cart.total;
