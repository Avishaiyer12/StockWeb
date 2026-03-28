import React, { useState } from "react";
import StockCard from "../../components/StockCard.jsx";

function Stocks() {
  const [search, setSearch] = useState("");

  const stocks = [
    { name: "Apple Inc.", symbol: "AAPL" },
    { name: "Microsoft Corporation", symbol: "MSFT" },
    { name: "Alphabet Inc.", symbol: "GOOGL" },
    { name: "Tesla Inc.", symbol: "TSLA" },
    { name: "Amazon.com Inc.", symbol: "AMZN" },
    { name: "NVIDIA Corporation", symbol: "NVDA" },
    { name: "JPMorgan Chase & Co.", symbol: "JPM" },
    { name: "Visa Inc.", symbol: "V" },
    { name: "Johnson & Johnson", symbol: "JNJ" },
    { name: "Walmart Inc.", symbol: "WMT" },
    { name: "Procter & Gamble Co.", symbol: "PG" },
    { name: "The Walt Disney Company", symbol: "DIS" },
    { name: "Mastercard Inc.", symbol: "MA" },
    { name: "Netflix Inc.", symbol: "NFLX" }
  ];

  const filteredStocks = stocks.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="w-full pt-28 pb-10 bg-white">
        <div className="text-center">
          <h2 className="text-green-600 text-xl font-semibold">Stocks</h2>
          <h1 className="text-4xl font-bold">Popular Stocks List</h1>
          <p className="text-gray-500 mt-3 px-5 md:px-0">
            Track real-time stock trends, visualize market movements, and gain
            insights with interactive charts and analytics.
          </p>
        </div>

        <div className="flex justify-center mt-6">
          <input
            type="text"
            placeholder="Search by stock name or symbol"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-4 py-2 rounded-lg w-72 md:w-96"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full px-6 mt-10">
          {filteredStocks.map((stock, index) => (
            <StockCard
              key={index}
              name={stock.name}
              symbol={stock.symbol}
              link={`/stock/${stock.symbol}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Stocks;
