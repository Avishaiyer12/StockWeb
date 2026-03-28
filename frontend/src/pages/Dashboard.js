import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
// import Predictions from "../components/Predictions";
// import StockChart from "../components/StockChart";

const Dashboard = () => {
  const [symbol, setSymbol] = useState("AAPL");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = () => {
    console.log(symbol, startDate, endDate);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar
          symbol={symbol}
          setSymbol={setSymbol}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          onSubmit={handleSubmit}
        />

        <div style={{ padding: "20px", flex: 1 }}>
          {/* <Predictions /> */}
          <h2>Stock Chart</h2>
          {/* <StockChart /> */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
