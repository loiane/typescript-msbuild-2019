export interface ShoppingCartState {
  cartCount: number;
}

export const shoppingCartInitialState: ShoppingCartState = {
  cartCount: 0
};

export const selectedCartCount = (state: ShoppingCartState) => state.cartCount;
