import { configureStore } from "@reduxjs/toolkit";
import uiSlice from './uiSlice';
import cartSliceReducer from "./cartSlice";

export const store = configureStore({
   reducer: { ui: uiSlice.reducer, cart: cartSliceReducer },
})