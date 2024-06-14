import React, { useState } from "react";

const Addcustomer = () => {
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    noOfPurchase: "",
    amount: "",
  });
  const { name, noOfPurchase, amount } = newCustomer;

  const handleChange = (e) => {
    setNewCustomer({ ...newCustomer, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="p-4">
        <h2 className="text-3xl font-semibold py-2">Addcustomer</h2>
        <form className="space-y-4">
          <div className="flex items-center gap-8">
            <label
              htmlFor="customerName"
              className="py-2 text-slate-800 text-2xl w-52"
            >
              Cutomer Name:
            </label>
            <input
              type="text"
              placeholder="e.g Amardeep Phule"
              name="name"
              id="customerName"
              value={name}
              onChange={handleChange}
              className="px-3 py-3 text-lg border-slate-900 bg-slate-100 shadow-sm rounded-md flex-1"
            />
          </div>
          <div className="flex items-center gap-8">
            <label
              htmlFor="noOfPurchase"
              className="py-2 text-slate-800 text-2xl w-52"
            >
              Number of Purchase:
            </label>
            <input
              type="Number"
              placeholder="e.g 10"
              name="noOfPurchase"
              id="noOfPurchase"
              value={noOfPurchase}
              onChange={handleChange}
              className="px-3 py-3 text-lg border-slate-900 bg-slate-100 shadow-sm rounded-md flex-1"
            />
          </div>
          <div className="flex items-center gap-8">
            <label
              htmlFor="amount"
              className="py-2 text-slate-800 text-2xl w-52"
            >
              Amount:
            </label>
            <input
              type="Number"
              placeholder="e.g 900"
              name="amount"
              id="amount"
              value={amount}
              onChange={handleChange}
              className="px-3 py-3 text-lg border-slate-900 bg-slate-100 shadow-sm rounded-md flex-1"
            />
          </div>
          <div className="flex justify-center">
            <button className="text-lg bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-md ">
              Add Customer
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Addcustomer;
