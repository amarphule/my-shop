import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCustomer, updateCustomer } from "../features/customersSlice";
import { useNavigate, useParams } from "react-router-dom";

const Addcustomer = () => {
  const customerId = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newCustomer, setNewCustomer] = useState({
    name: "",
    noOfPurchase: "",
    amount: "",
  });
  const { name, noOfPurchase, amount } = newCustomer;

  const customers = useSelector((state) => state.customers);

  // For update find record and update existing record
  const customer = customers.find(
    (customer) => Number(customer.id) === Number(customerId.id)
  );

  useEffect(() => {
    if (customer) {
      setNewCustomer({
        name: customer.name,
        noOfPurchase: customer.noOfPurchase,
        amount: customer.amount,
      });
    }
  }, [customer]);

  const handleChange = (e) => {
    setNewCustomer({ ...newCustomer, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    // Black field check
    if (!name || !noOfPurchase || !amount) {
      alert("Please Enter value");
      return;
    }

    if (customer) {
      dispatch(updateCustomer({ ...newCustomer, id: customer.id }));
    } else {
      dispatch(addCustomer({ ...newCustomer, id: Date.now() }));
    }
    setNewCustomer({ name: "", noOfPurchase: "", amount: "" });
    navigate("/");
  };

  return (
    <>
      <div className="p-4">
        <h2 className="text-3xl font-semibold py-2">
          {customerId.id ? "Update Customer" : "Add Customer"}
        </h2>
        <form className="space-y-4" onSubmit={handleSubmitForm}>
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
              className="px-3 py-2 text-xl  border-slate-900 bg-slate-100 shadow-sm rounded-md flex-1"
            />
          </div>
          <div className="flex items-center gap-8">
            <label
              htmlFor="noOfPurchase"
              className="py-2 text-slate-800 text-2xl w-52"
            >
              Number of Purchase Items:
            </label>
            <input
              type="Number"
              placeholder="e.g 10"
              name="noOfPurchase"
              id="noOfPurchase"
              value={noOfPurchase}
              onChange={handleChange}
              className="px-3 py-2 text-xl  border-slate-900 bg-slate-100 shadow-sm rounded-md flex-1"
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
              className="px-3 py-2 text-xl border-slate-900 bg-slate-100 shadow-sm rounded-md flex-1"
            />
          </div>
          <div className="flex justify-center">
            <button className="text-lg tracking-wide bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-md ">
              {customerId.id ? "Update Customer" : "Add Customer"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Addcustomer;
