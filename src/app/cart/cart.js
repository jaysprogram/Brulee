/*import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart(state, action){

            const {productId, quantity} = action.payload;
            const indexProductId = (state.items).findIndex(item => item.productId === productId);
            if(indexProductId >= 0){
                state.items[indexProductId].quantity += quantity;
            }else{
            state.items.push({productId, quantity});
            }
        }
    }
})
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
*/

// Example cart slice

import { createSlice } from "@reduxjs/toolkit";
//import { useParams } from "next/navigation";

const initialState = {
  items: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.productId === item.productId);

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
    },
    // other reducers like removeFromCart, clearCart, etc.
  }
});

// ✅ THUNK: Add to backend + update Redux
export const addToCartBackend = (item) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:5000/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: item.productId,
        quantity: item.quantity,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Failed to add to backend:", error);
      return;
    }

    const data = await response.json();
    dispatch(addToCart(data.cartItem)); 
  } catch (error) {
    console.error("Error adding to backend:", error);
  }
};

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

