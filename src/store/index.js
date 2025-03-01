import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartSlice from "./cart-Slice";

const store = configureStore({
  reducer: { 
    auth: authSlice.reducer, 
    cart: cartSlice.reducer
  }
});

export default store;
