import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "John R",
    noOfPurchase: 10,
    amount: 1200,
  },
  {
    id: 2,
    name: "Rocky B",
    noOfPurchase: 20,
    amount: 2400,
  },
  {
    id: 3,
    name: "Burley Rox",
    noOfPurchase: 8,
    amount: 960,
  },
];

const customerSlice = createSlice({
  name: "customre",
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      state.push(action.payload);
    },
    deleteCustomer: (state, action) => {
      return state.filter((customer) => customer.id !== action.payload);
    },
  },
});

export const { addCustomer, deleteCustomer } = customerSlice.actions;
export default customerSlice.reducer;
