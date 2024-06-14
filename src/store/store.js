import { configureStore } from "@reduxjs/toolkit";
import customeReducer from "../features/customersSlice";

const store = configureStore({
  reducer: {
    customers: customeReducer,
  },
});

export default store;
