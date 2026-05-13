import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Feature/cartSlice";

export const store = configureStore({

    reducer: {
        cart: cartReducer
    }

});