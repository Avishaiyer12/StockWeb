import { useEffect, useState } from "react";

const initialStocks = [];

const Watchlist = () => {
  const [stocks, setStocks] = useState(initialStocks);

  useEffect(() => {
    const existing = JSON.parse(localStorage.getItem("watchlist")) || [];
    setStocks(existing);
  }, []);

  const handleRemove = (stockName) => {
    const updatedStocks = stocks.filter(
      (stock) => stock !== stockName
    );

    setStocks(updatedStocks);
    localStorage.setItem("watchlist", JSON.stringify(updatedStocks));
  };

  const handleAddToCart = async (symbol) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to add stocks to your cart.");
      return;
    }

    try {
      console.log(`Sending add to cart request for symbol: ${symbol}`);
      const res = await fetch("http://localhost:5000/api/users/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ symbol }),
      });

      // console.log(`Response status: ${res.status}`);

      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await res.text();
        console.log("Expected JSON but got:", text.substring(0, 100));
        throw new Error(`Server returned non-JSON response (Status ${res.status})`);
      }

      const data = await res.json();
      if (res.ok) {
        alert(`${symbol} added to cart!`);
        window.dispatchEvent(new Event("cartUpdated"));
      } else {
        console.log("Error details:", data);
        alert(`Failed (Status ${res.status}): ${data.message || JSON.stringify(data)}`);
      }
    } catch (error) {
      console.error("Fetch error details:", error);
      alert(`Network error: ${error.message}`);
    }
  };

  return (
    <>
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h4 className="text-[#00D084] font-semibold text-lg mb-2">
            Watchlist
          </h4>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Stock Watchlist
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-md leading-relaxed">
            Track your favorite stocks in real-time. Get updates on price changes,
            market trends, and performance insights all in one place.
          </p>

          <div className="border border-blue-100 rounded-2xl p-4 md:p-10 bg-white">
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">

              {stocks.length === 0 ? (
                <div className="p-10 text-gray-400">
                  Your watchlist is empty.
                </div>
              ) : (
                stocks.map((stock, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-5 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
                  >
                    <div className="text-left">
                      <span className="text-[#00D084] font-medium text-lg uppercase">
                        {stock}
                      </span>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => handleAddToCart(stock)}
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg text-sm transition-all shadow-sm flex items-center gap-2"
                      >
                        Add to Cart
                      </button>
                      <button
                        onClick={() => handleRemove(stock)}
                        className="bg-[#E53E3E] hover:bg-[#C53030] text-white font-semibold py-2 px-6 rounded-lg text-sm transition-all shadow-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Watchlist;
