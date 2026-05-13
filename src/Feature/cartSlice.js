import { createSlice } from "@reduxjs/toolkit";

const saveCart = JSON.parse(localStorage.getItem("CART")) || []

export const cartSlice = createSlice({



    name: "cart",

    initialState: {
        cartItems: saveCart.filter((item) => item !== null)
    },

    reducers: {

        addToCart: (state, action) => {

            state.cartItems = [action.payload, ...state.cartItems];

            localStorage.setItem(
                "CART",
                JSON.stringify(state.cartItems)
            );
        },

        deleteCart: (state, action) => {

            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);

            localStorage.setItem(
                "CART",
                JSON.stringify(state.cartItems))

        },

        ChangeQuantity: (state, action) => {

            const { id, finalQuantity } = action.payload;

            state.cartItems = state.cartItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: finalQuantity }
                    : item
            );

            localStorage.setItem(
                "CART",
                JSON.stringify(state.cartItems)
            );
        }

    }
});

export const { addToCart, deleteCart, ChangeQuantity } = cartSlice.actions;

export default cartSlice.reducer;