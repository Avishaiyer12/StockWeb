import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const existingData = {
  AAPL: { name: "Apple Inc", sector: "Technology" },
  MSFT: { name: "Microsoft Corp", sector: "Technology" },
  GOOGL: { name: "Alphabet Inc", sector: "Tech" },
};

export default function EditStock() {
  const { symbol } = useParams();

  const [form, setForm] = useState({
    symbol: symbol.toUpperCase(),
    name: "",
    sector: "",
  });

  useEffect(() => {
    if (existingData[symbol.toUpperCase()]) {
      setForm({
        symbol: symbol.toUpperCase(),
        name: existingData[symbol.toUpperCase()].name,
        sector: existingData[symbol.toUpperCase()].sector,
      });
    }
  }, [symbol]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Stock updated (dummy): " + JSON.stringify(form));
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">✏️ Edit Stock</h1>
      <p className="text-gray-600 mb-8">
        Editing stock: <strong>{symbol.toUpperCase()}</strong>
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 p-6 border rounded-xl shadow bg-white"
      >
        <div>
          <label className="block mb-1 font-medium">Stock Symbol</label>
          <input
            type="text"
            name="symbol"
            className="w-full border px-3 py-2 rounded-md bg-gray-100"
            value={form.symbol}
            disabled
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Stock Name</label>
          <input
            type="text"
            name="name"
            className="w-full border px-3 py-2 rounded-md"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Sector</label>
          <input
            type="text"
            name="sector"
            className="w-full border px-3 py-2 rounded-md"
            value={form.sector}
            onChange={handleChange}
            required
          />
        </div>

        <button className="bg-blue-600 text-white w-full py-2 rounded-lg text-lg">
          Update Stock
        </button>
      </form>
    </div>
  );
}
