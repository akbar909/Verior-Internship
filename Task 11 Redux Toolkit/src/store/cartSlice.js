import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id);

            state.totalQuantity++;

            if(!existingItem){
                state.items.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    image: newItem.image,
                    quantity: 1,
                    totalPrice: newItem.price,
                })
            } else{
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }
            state.totalPrice +=newItem.price
        },
        
        removeItem:(state, action) => {
            const itemId = action.payload;
            const existingItem = state.items.find(item => item.id ===itemId)
            if(existingItem){
                state.totalQuantity-= existingItem.quantity;
                state.totalPrice -=existingItem.totalPrice;
                state.items= state.items.filter(item => item.id !== itemId)
            }
        },
        decreaseQuantity: (state, action) => {
            const  itemId = action.payload;
            const existingItem = state.items.find(item =>item.id ===itemId);
            if(existingItem && existingItem.quantity >1) {
                existingItem.quantity--
                existingItem.totalPrice -= existingItem.price
                state.totalPrice -= existingItem.price
            } else if(existingItem && existingItem.quantity === 1) {
                state.totalQuantity--;
                state.totalPrice -= existingItem.totalPrice;
                state.items = state.items.filter(item => item.id !== itemId);
            }
        },

        clearCart: (state) => {
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        }
    }
});

export const {addItem, removeItem, decreaseQuantity, clearCart} = cartSlice.actions
export default cartSlice.reducer;