import { Link } from "react-router-dom";

export default function AdminPanel() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-3">🛠 Admin Dashboard</h1>
      <p className="text-gray-600 mb-8">
        Manage users, stocks, and system settings.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-xl shadow bg-white">
          <h2 className="text-xl font-semibold mb-2">👥 Manage Users</h2>
          <p className="text-gray-600 mb-4">View and manage registered users.</p>
          <Link to="/admin/users">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700">
              View Users
            </button>
          </Link>
        </div>

        <div className="p-6 border rounded-xl shadow bg-white">
          <h2 className="text-xl font-semibold mb-2">➕ Add Stock</h2>
          <p className="text-gray-600 mb-4">Add a new stock to the system.</p>

          <Link to="/admin/add-stock">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg w-full">
              Add Stock
            </button>
          </Link>
        </div>

        <div className="p-6 border rounded-xl shadow bg-white">
          <h2 className="text-xl font-semibold mb-2">✏️ Edit Stock</h2>
          <p className="text-gray-600 mb-4">Modify details of existing stocks.</p>

          <Link to="/admin/manage-stocks">
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg w-full">
              Edit Stock
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-xl shadow bg-white">
          <h2 className="text-xl font-semibold mb-2">🔄 Refresh Data</h2>
          <p className="text-gray-600 mb-4">
            Update all stock data from the server.
          </p>
          <Link to="/stocks">
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg w-full hover:bg-purple-700 transition">
              View Live Stocks
            </button>
          </Link>
        </div>

        <div className="p-6 border rounded-xl shadow bg-white">
          <h2 className="text-xl font-semibold mb-2">📬 Contact Forms</h2>
          <p className="text-gray-600 mb-4">View submitted contact messages.</p>
          <Link to="/admin/contacts">
            <button className="bg-gray-700 text-white px-4 py-2 rounded-lg w-full hover:bg-gray-800">
              View Contacts
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
