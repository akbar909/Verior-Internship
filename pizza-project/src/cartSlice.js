import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  userName: '',
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setUserName(state, action) {
      state.userName = action.payload;
    },
    addToCart(state, action) {
      const { pizza, userName } = action.payload;
      const existing = state.items.find(item => item.pizzaName === pizza.name);
      state.userName = userName;
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({
          pizzaName: pizza.name,
          price: pizza.price,
          quantity: 1,
        });
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(item => item.pizzaName !== action.payload);
    },
    increaseQuantity(state, action) {
      const item = state.items.find(i => i.pizzaName === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity(state, action) {
      const item = state.items.find(i => i.pizzaName === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { setUserName, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
