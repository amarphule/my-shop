import CustomerList from "./components/CustomerList";

export const customers = [
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

const App = () => {
  return (
    <>
      <h1 className="text-4xl font-semibold underline text-center py-5">
        Today's Purchase
      </h1>
      <CustomerList />
    </>
  );
};

export default App;
