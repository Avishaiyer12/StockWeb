import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  const location = useLocation();

  const fetchCartCount = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await fetch("https://stockweb-eibm.onrender.com/api/users/cart", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setCartCount(data.length);
      }
    } catch (error) {
      console.error("Error fetching cart count:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("role");
    setIsLoggedIn(!!token);
    setRole(userRole);
    if (token && userRole === "user") {
      fetchCartCount();
    }

    const handleCartUpdate = () => fetchCartCount();
    window.addEventListener("cartUpdated", handleCartUpdate);
    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    setRole(null);
    setCartCount(0);
  };

  return (
    <header className="w-full">
      <div className="w-full bg-gray-800 text-gray-200 text-sm px-6 py-2 flex justify-between items-center">
        <div className="flex gap-6">
          <span>📍 Mumbai, Maharashtra</span>
          <span>📞 +91 98704 44559</span>
          <span>📧 support@stocker.com</span>
        </div>

        <div className="flex gap-4">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="hover:text-white border-none bg-transparent cursor-pointer">
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="hover:text-white">Login</Link>
              <Link to="/register" className="hover:text-white">Register</Link>
            </>
          )}
        </div>
      </div>

      <nav className="w-full bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          STOCKER
        </Link>

        <ul className="flex items-center gap-8 text-lg">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/stock_visualization">Stock Visualization</Link></li>
          <li><Link to="/predict/AAPL">Stock Prediction</Link></li>
          <li><Link to="/watchlist">Stock Watchlist</Link></li>
          <li><Link to="/news">Stock News</Link></li>
          {isLoggedIn && role === "user" && (
            <>
              <li><Link to="/profile" className="text-white-900 ">User Dashboard</Link></li>
              <li>
                <Link to="/cart" className="text-white-900 flex items-center gap-1 relative">
                  🛒 Cart
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-4 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-gray-900">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </li>
            </>
          )}
          {role === "admin" && <li><Link to="/admin" className="text-white-900">Admin Panel</Link></li>}
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {!isLoggedIn && (
          <Link
            to="/register"
            className="bg-green-600 px-5 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Get Started
          </Link>
        )}
      </nav>
    </header>
  );
}
