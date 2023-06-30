import { Shoe } from "../../abstract/models";

export interface CartStateItem {
  item: Shoe;
  amount: number;
}

export interface CartState {
  cartItems: CartStateItem[];
  total: number;
}
