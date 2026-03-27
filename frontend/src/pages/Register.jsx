import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }

      try {
        const res = await fetch("https://stockweb-eibm.onrender.com/api/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch profile");
        }

        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error(error);
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("role");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <div className="text-center py-20">Loading Dashboard...</div>;

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-10 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-blue-600 p-8 text-white">
          <h1 className="text-3xl font-bold">Welcome back, {user?.name}!</h1>
          <p className="mt-2 opacity-90">Manage your investments and watchlist in one place.</p>
        </div>

        <div className="p-8 grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-800 border-b pb-2">Your Information</h2>
            <div className="space-y-4">
              <div>
                <span className="block text-sm text-gray-500 uppercase font-bold tracking-wider">Name</span>
                <p className="text-lg font-medium">{user?.name}</p>
              </div>
              <div>
                <span className="block text-sm text-gray-500 uppercase font-bold tracking-wider">Email</span>
                <p className="text-lg font-medium">{user?.email}</p>
              </div>
            </div>

            <Link to="/profile/edit">
              <button className="w-full bg-gray-100 text-gray-800 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
                ✏️ Edit Profile
              </button>
            </Link>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-800 border-b pb-2">Quick Access</h2>
            <div className="grid grid-cols-1 gap-4">
              <Link to="/watchlist" className="flex items-center p-4 bg-green-50 rounded-xl hover:bg-green-100 transition border border-green-100">
                <span className="text-3xl mr-4">📊</span>
                <div>
                  <h3 className="font-bold text-green-800">My Watchlist</h3>
                  <p className="text-sm text-green-700">View tracked stocks ({user?.watchlist?.length || 0})</p>
                </div>
              </Link>

              <Link to="/stocks" className="flex items-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition border border-blue-100">
                <span className="text-3xl mr-4">🚀</span>
                <div>
                  <h3 className="font-bold text-blue-800">Explore Stocks</h3>
                  <p className="text-sm text-blue-700">Find new market opportunities</p>
                </div>
              </Link>

              <Link to="/predict/AAPL" className="flex items-center p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition border border-purple-100">
                <span className="text-3xl mr-4">🤖</span>
                <div>
                  <h3 className="font-bold text-purple-800">AI Predictions</h3>
                  <p className="text-sm text-purple-700">Get insights on AAPL and more</p>
                </div>
              </Link>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
