import { createSlice } from "@reduxjs/toolkit";

// Initial Mock Data
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
    updateCustomer: (state, action) => {
      const customerIndex = state.findIndex(
        (customer) => customer.id == action.payload.id
      );
      if (customerIndex !== -1) {
        state[customerIndex] = action.payload;
      }
    },
  },
});

export const { addCustomer, deleteCustomer, updateCustomer } =
  customerSlice.actions;

export default customerSlice.reducer;
