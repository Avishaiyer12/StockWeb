import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ManageStocks() {
  const [stocks, setStocks] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchStocks = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/stocks");
      const data = await res.json();
      if (res.ok) {
        setStocks(data);
      }
    } catch (error) {
      console.error("Error fetching stocks:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStocks();
  }, []);

  const handleDelete = async (id, symbol) => {
    if (!window.confirm(`Are you sure you want to delete ${symbol}?`)) return;

    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`http://localhost:5000/api/stocks/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        alert("Stock deleted successfully");
        fetchStocks();
      } else {
        const data = await res.json();
        alert(`Failed to delete: ${data.message}`);
      }
    } catch (error) {
      console.error("Error deleting stock:", error);
      alert("Network error while deleting stock");
    }
  };

  const filteredStocks = stocks.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 max-w-6xl mx-auto min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">✏️ Manage Stocks</h1>
        <Link to="/admin/add-stock">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
            + Add New Stock
          </button>
        </Link>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search stocks to edit..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        {loading ? (
          <div className="p-10 text-center text-gray-500">Loading stocks...</div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700 border-b">
                <th className="p-4">Symbol</th>
                <th className="p-4">Name</th>
                <th className="p-4">Price</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStocks.length === 0 ? (
                <tr>
                  <td colSpan="4" className="p-10 text-center text-gray-400">
                    No stocks found.
                  </td>
                </tr>
              ) : (
                filteredStocks.map((stock) => (
                  <tr key={stock._id} className="border-b hover:bg-gray-50">
                    <td className="p-4 font-bold text-blue-600 font-mono">{stock.symbol}</td>
                    <td className="p-4">{stock.name}</td>
                    <td className="p-4 font-semibold">${stock.price.toFixed(2)}</td>
                    <td className="p-4 text-center space-x-2">
                      <Link to={`/admin/edit-stock/${stock.symbol}`}>
                        <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition text-sm font-medium">
                          Edit
                        </button>
                      </Link>
                      <button 
                        onClick={() => handleDelete(stock._id, stock.symbol)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition text-sm font-medium"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
