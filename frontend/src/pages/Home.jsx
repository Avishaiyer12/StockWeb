 import React from "react";
  import { Link } from "react-router-dom";

 function Home() {
  return (
    <>
      <div className="text-center mt-16">
        <h1 className="text-4xl font-bold text-gray-900">
          📊 Stock Prediction & Visualization
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Analyze stocks, view charts, track watchlists, and predict prices
          using AI.
        </p>

        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700"><a href="/stock_visualization">
          Explore Stocks </a>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 px-10">
          <div className="p-6 bg-white shadow rounded-lg">
            <h2 className="text-xl font-bold">🔎 Search Stocks</h2>
            <p className="text-gray-600 mt-2">
              Find real-time stock market data quickly.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-lg">
            <h2 className="text-xl font-bold">📉 Visual Charts</h2>
            <p className="text-gray-600 mt-2">
              See moving averages, RSI, volume & trends.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-lg">
            <h2 className="text-xl font-bold">🤖 AI Predictions</h2>
            <p className="text-gray-600 mt-2">
              Get predicted stock prices using ML models.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-50 min-h-screen py-16 px-6 md:px-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-9 text-center">
          About
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-10 text-center">
          Empowering Smarter Investments with Data-Driven Insights
        </h2>

        <div className="bg-none rounded-2xl shadow-lg p-8 md:p-12 grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Our platform provides real-time stock visualization and predictive
              analytics to help investors make informed decisions. Using
              advanced machine learning models and intuitive charts, we turn
              complex market data into actionable insights.
            </p>

            <div className="space-y-6 mt-8">
              <h3 className="text-xl font-semibold text-gray-800">
                Business Consulting
              </h3>
              <p className="text-gray-600 mt-2">
                Expert advice for leveraging stock trends and market behavior in
                strategic planning.
              </p>

              <h3 className="text-xl font-semibold text-gray-800">
                Years of Expertise
              </h3>
              <p className="text-gray-600 mt-2">
                Backed by experience in financial analytics, AI modeling, and
                market research.
              </p>
            </div>

            <div className="flex gap-4 mt-10">
              <a
                href="#"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
              >
                Discover Now
              </a>

              <a
                href="tel:+919420069741"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50"
              >
                Call Us
                <span className="ml-2 font-semibold">+91 98704 44559</span>
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-[390px] h-[295px] rounded-2xl shadow-inner flex items-center justify-center pt-23 pl-20 justify-content-center">
              <span className="text-blue-600 text-6xl font-bold">
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSSawG_cmdvk5Nj53-uXHLt9VKDwFI-Ib1J9JCbbpZ2a5OEke_o" />
                &nbsp;
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7WcJos_a3jDp6B2UhOrRvLVbXwRPPv71U-_0sA8jwzK35ICYS" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;