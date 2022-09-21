import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    increase(state, action) {
      const product = action.payload;
      const contains = state.cart.find(
        (item) => item.product.id === product.id
      );
      if (contains) {
        state.cart = state.cart.map((item) =>
          item.product.id === product.id
            ? {
                ...item,
                count: item.count + 1,
              }
            : item
        );
      } else {
        state.cart = [
          ...state.cart,
          {
            product: product,
            count: 1,
          },
        ];
      }
    },
    decrease(state, action) {
      const id = action.payload;
      if (state.cart.find((item) => item.product.id === id).count === 1) {
        state.cart = state.cart.filter((item) => item.product.id !== id);
      } else {
        state.cart = state.cart.map((item) =>
          item.product.id === id
            ? {
                ...item,
                count: item.count - 1,
              }
            : item
        );
      }
    },
  },
});

export default appSlice.reducer;

export const { increase, decrease } = appSlice.actions;
