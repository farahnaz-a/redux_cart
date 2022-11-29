import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart", 
    initialState : { 
        cartItems : []
    },
    reducers : {
        addToCart : (state, action) => {

            const item = state.cartItems.find((x) => x.product === action.payload.product);
            if (item) {
                item.qty += action.payload.qty;
            } else {
                state.cartItems.push(action.payload);
            }
        },

        removeFromCart : (state, action) => {
            
            state.cartItems = state.cartItems.filter((x) => x.product !== action.payload);

        }
    }

});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
