import { useState } from "react";

export default function AddStock() {
  const [form, setForm] = useState({
    symbol: "",
    name: "",
    sector: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Stock added (dummy frontend only): " + JSON.stringify(form));
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">➕ Add New Stock</h1>
      <p className="text-gray-600 mb-8">Fill the details to add a new stock.</p>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 p-6 border rounded-xl shadow bg-white"
      >
        <div>
          <label className="block mb-1 font-medium">Stock Symbol</label>
          <input
            type="text"
            name="symbol"
            placeholder="e.g. AAPL"
            className="w-full border px-3 py-2 rounded-md"
            value={form.symbol}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Stock Name</label>
          <input
            type="text"
            name="name"
            placeholder="e.g. Apple Inc"
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
            placeholder="e.g. Technology"
            className="w-full border px-3 py-2 rounded-md"
            value={form.sector}
            onChange={handleChange}
            required
          />
        </div>

        <button className="bg-green-600 text-white w-full py-2 rounded-lg text-lg">
          Add Stock
        </button>
      </form>
    </div>
  );
}
