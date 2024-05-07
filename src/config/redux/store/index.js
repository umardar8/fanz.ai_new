import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../reducers/cartSlice";
import userSlice from "../reducers/userSlice";

const Store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
  },
});

export default Store;
