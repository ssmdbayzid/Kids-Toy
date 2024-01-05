import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        
    }
})