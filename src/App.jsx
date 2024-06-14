import Addcustomer from "./components/Addcustomer";
import CustomerList from "./components/CustomerList";

const App = () => {
  return (
    <>
      <h1 className="text-4xl font-semibold underline text-center py-5">
        Today's Purchase
      </h1>
      <Addcustomer />
      <CustomerList />
    </>
  );
};

export default App;
