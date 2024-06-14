import CustomerList from "./components/CustomerList";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <h1 className="text-4xl font-semibold underline text-center py-5 mt-3">
        Today's Purchase
      </h1>
      <div className="flex justify-center gap-4 my-5">
        <Link to={"/"} className="px-4 py-1 font-semibold">
          Home
        </Link>
        <Link
          to={"/customer"}
          className="px-4 py-2  bg-blue-600 hover:bg-blue-500 text-white rounded-md"
        >
          Add Customer
        </Link>
      </div>
      <CustomerList />
    </>
  );
};

export default App;
