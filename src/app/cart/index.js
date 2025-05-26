import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart';

export const store = configureStore({
    reducer: {
        cart: cartReducer, // handles the state related to the shopping cart in real application
        // user: ...

    }
})