import { createSlice } from "@reduxjs/toolkit";

const saveCart = (JSON.parse(localStorage.getItem("CART")) || []).map((item) => 
    item
        ? {
            ...item,
            cartId :
                item.cartId ??  `${item.id}-${item.size}-${item.color?.code || item.color}`,
        }
        : item
)


export const cartSlice = createSlice({



    name: "cart",

    initialState: {
        cartItems: saveCart.filter((item) => item !== null)
    },

    reducers: {

        addToCart: (state, action) => {
            
            const existingIndex = state.cartItems.findIndex(
                (item) => item.cartId === action.payload.cartId
            );

            if (existingIndex >= 0) {
                    state.cartItems[existingIndex].quantity += action.payload.quantity
            } else {
                state.cartItems = [action.payload, ...state.cartItems];
            }
            localStorage.setItem(
                "CART",
                 JSON.stringify(state.cartItems));
            // state.cartItems = [action.payload, ...state.cartItems];

            // localStorage.setItem(
            //     "CART",
            //     JSON.stringify(state.cartItems)
            // );
        },

        deleteCart: (state, action) => {

            state.cartItems = state.cartItems.filter((item) => item.cartId !== action.payload);

            localStorage.setItem(
                "CART",
                JSON.stringify(state.cartItems))

        },

        ChangeQuantity: (state, action) => {

            const { cartId, finalQuantity } = action.payload;

            state.cartItems = state.cartItems.map((item) =>
                item.cartId === cartId
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