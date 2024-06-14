import { useSelector } from "react-redux";

const CustomerList = () => {
  const customers = useSelector((state) => state.customers);
  return (
    <>
      <div className="w-1/2 p-4">
        <h2 className="text-3xl font-semibold py-2">CustomerList</h2>

        {customers.length > 0 ? (
          <table className="divide-y divide-slate-900">
            <thead>
              <tr className="bg-slate-200">
                <th className="px-7 py-3 font-medium uppercase text-lg">
                  Name
                </th>
                <th className="px-7 py-3 font-medium uppercase text-lg">
                  No of Purchase
                </th>
                <th className="px-7 py-3 font-medium uppercase text-lg">
                  amount
                </th>
                <th className="px-4 py-3 font-medium uppercase text-lg">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-900 text-center">
              {customers.map((customer) => {
                return (
                  <tr key={customer.id}>
                    <td className="px-7 py-4 text-lg">
                      <div>{customer.name}</div>
                    </td>
                    <td className="px-7 py-4 text-lg">
                      <div>{customer.noOfPurchase}</div>
                    </td>
                    <td className="px-7 py-4 text-lg">
                      <div>{customer.amount}</div>
                    </td>
                    <td className="px-7 py-4 text-lg">
                      <button className="bg-slate-500 hover:bg-slate-700 text-white mr-2  px-3 py-2 rounded-md">
                        Edit
                      </button>
                      <button className="bg-red-500 hover:bg-red-700 text-white px-3 py-2 rounded-md">
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className="text-2xl font-light text-center">
            No customer found.
          </div>
        )}
      </div>
    </>
  );
};

export default CustomerList;
