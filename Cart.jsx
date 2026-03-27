import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchCart = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }

    try {
      const res = await fetch("https://stockweb-eibm.onrender.com/api/users/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (res.ok) {
        setCartItems(data);
      }
    } catch (error) {
      console.error("Error fetching cart:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const updateQuantity = async (stockId, newQuantity) => {
    if (newQuantity < 1) return;
    const token = localStorage.getItem("token");
    try {
      const res = await fetch("https://stockweb-eibm.onrender.com/api/users/cart", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ stockId, quantity: newQuantity }),
      });
      if (res.ok) {
        const data = await res.json();
        setCartItems(data);
      }
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const removeItem = async (stockId) => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`https://stockweb-eibm.onrender.com/api/users/cart/${stockId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        setCartItems(data);
        window.dispatchEvent(new Event("cartUpdated"));
      }
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.stock.price * item.quantity);
    }, 0).toFixed(2);
  };

  const handleCheckout = async () => {
    const token = localStorage.getItem("token");
    if (!cartItems.length) return;

    try {
      const res = await fetch("https://stockweb-eibm.onrender.com/api/users/checkout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        alert("🎉 Purchase successful! View your stocks in the dashboard.");
        window.dispatchEvent(new Event("cartUpdated"));
        navigate("/profile");
      } else {
        const data = await res.json();
        alert(`Checkout failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Network error during checkout.");
    }
  };

  const proceedToPayment = () => {
    const total = calculateTotal();
    const confirmPayment = window.confirm(`Proceed to pay $${total}? This will simulate a secure payment link.`);
    if (confirmPayment) {
      handleCheckout();
    }
  };

  if (loading) return <div className="text-center py-20">Loading Cart...</div>;

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-10 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Stock Cart</h1>

        {cartItems.length === 0 ? (
          <div className="bg-white p-10 rounded-2xl shadow text-center">
            <p className="text-gray-500 text-lg mb-6">Your cart is currently empty.</p>
            <Link
              to="/stocks"
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition inline-block"
            >
              Start Exploring Stocks
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item._id} className="bg-white p-6 rounded-2xl shadow flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 uppercase">{item.stock.symbol}</h3>
                    <p className="text-gray-500">{item.stock.name}</p>
                    <p className="text-blue-600 font-bold mt-1">${item.stock.price.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center gap-4 bg-gray-50 p-2 rounded-xl border">
                    <button
                      onClick={() => updateQuantity(item.stock._id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm font-bold text-gray-600 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="font-bold text-lg w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.stock._id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm font-bold text-gray-600 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.stock._id)}
                    className="ml-6 text-red-500 hover:text-red-700 transition"
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-2xl shadow h-fit space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${calculateTotal()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Brokerage Fee</span>
                  <span className="text-green-600">FREE</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-gray-800 pt-4 border-t">
                  <span>Total Est.</span>
                  <span className="text-blue-600">${calculateTotal()}</span>
                </div>
              </div>

              <button
                onClick={proceedToPayment}
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-lg"
              >
                Proceed to Payment
              </button>

              <p className="text-xs text-center text-gray-400">
                Secure transaction powered by Stocker Payments.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
