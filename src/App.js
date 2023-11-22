import "./App.css";
import Customer from "./component/Customer/Customer";
import Graph from "./component/Graph/Graph";
import Layout from "./component/Layout";
import Table from "./component/Table/Table";

function App() {
  return (
    <>
      <Layout />
      <Graph />
      <Customer />
      <Table />
    </>
  );
}

export default App;
