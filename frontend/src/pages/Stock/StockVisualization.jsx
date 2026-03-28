import { useState } from "react";

export default function StockVisualization() {
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
    { name: "PayPal Holdings Inc.", symbol: "PYPL" },
    { name: "Netflix Inc.", symbol: "NFLX" },
  ];

  const filteredStocks = stocks.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full px-8 py-10 bg-gray-100 min-h-screen">

      <h1 className="text-4xl font-bold text-gray-900 mb-3">
        Stock Visualization
      </h1>

      <p className="text-gray-600 max-w-3xl mb-8">
        Browse popular stocks and analyze market performance using interactive
        charts and real-time analytics.
      </p>

      <div className="mb-8">
        <input
          type="text"
          placeholder="Search by stock name or symbol"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-3 border rounded-lg shadow-sm
                     focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStocks.map((stock, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow border
                       hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <a href={`/stock/${stock.symbol}`}>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {stock.name}
                    </h3>
            
            </a>
            <p className="text-blue-600 font-bold text-lg mt-2">
              {stock.symbol}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}
