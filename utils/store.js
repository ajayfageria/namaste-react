import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "../utils/cartSlice";
const store = configureStore({
  reducer: {
    cart: cartSliceReducer
  },
});
export default store;
