import React, { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

export default function StockPrediction() {
  const [symbol, setSymbol] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = "WXDSZZOWFGVXNDI4";

  const fetchStockData = async () => {
    if (!symbol || !startDate || !endDate) {
      alert("Please enter symbol and dates");
      return;
    }

    setLoading(true);

    const response = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`
    );

    const data = await response.json();
    const timeSeries = data["Time Series (Daily)"];

    if (!timeSeries) {
      alert("Invalid Symbol or API limit reached");
      setLoading(false);
      return;
    }

    const filteredData = Object.keys(timeSeries)
      .filter(date => date >= startDate && date <= endDate)
      .map(date => ({
        date,
        close: parseFloat(timeSeries[date]["4. close"])
      }))
      .reverse();

    setStockData(filteredData);
    setLoading(false);
  };

  return (
    <>
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-72 bg-gray-700 text-white p-10">
        <h2 className="text-2xl font-bold mb-6">Stock Input</h2>

        <label>Stock Symbol</label>
        <input
          value={symbol}
          onChange={(e) => setSymbol(e.target.value.toUpperCase())}
          className="w-full p-2 mb-4 text-black rounded"
        />

        <label>Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full p-2 mb-4 text-black rounded"
        />

        <label>End Date</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full p-2 mb-4 text-black rounded"
        />

        <button
          onClick={fetchStockData}
          className="w-full mt-4 bg-green-500 p-2 rounded"
        >
          Show Data
        </button>

        {stockData.length > 0 && (
          <div className="bg-gray-600 text-white p-4 rounded mt-6">
            <h3 className="text-xl font-bold mb-3">Stock Information</h3>
            <ul className="space-y-2 text-sm">
              <li>• <b>Symbol:</b> {symbol}</li>
              <li>• <b>Start Date:</b> {new Date(startDate).toDateString()}</li>
              <li>• <b>End Date:</b> {new Date(endDate).toDateString()}</li>
            </ul>
        </div>
    )}
      </div>

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-center mb-4">
          Stock Dashboard and Prediction
        </h1><br/>
        <div className="p-6 rounded shadow mb-6">
          <h2 className="text-xl font-semibold mb-2">Predictions</h2>
          <ul>
            <li>Linear Regression: <b>188.38</b></li>
            <li>LSTM: <b>218.11</b></li>
            <li>Random Forest: <b>190.07</b></li>
          </ul>
        </div>

        {loading && <p className="text-center">Loading...</p>}

        {stockData.length > 0 && (
          <>
            <div className="bg-white p-6 rounded shadow mb-6">
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={stockData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line dataKey="close" stroke="#2563eb" />
                </LineChart>
              </ResponsiveContainer>
            </div>

    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Price Table</h2>
    <div className="max-h-[350px] overflow-y-auto border rounded">
    <table className="w-full border-collapse">
      <thead className="bg-gray-200 sticky top-0">
        <tr>
          <th className="border p-2 text-left">Date</th>
          <th className="border p-2 text-left">Close</th>
        </tr>
      </thead>
      <tbody>
        {stockData.map((row, i) => (
          <tr key={i} className="hover:bg-gray-100">
            <td className="border p-2">{row.date}</td>
            <td className="border p-2">{row.close}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
          </>
        )}
      </div>
    </div>
    </>
  );
}