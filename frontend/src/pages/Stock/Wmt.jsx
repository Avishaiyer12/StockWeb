import React, { useState } from "react";
import "./Wmt.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);


const Wmt = () => {
  const [show5Day, setShow5Day] = useState(true);
  const [show20Day, setShow20Day] = useState(true);

    const addToStorage = (data) => {
        const existing = JSON.parse(localStorage.getItem('watchlist')) || [];
        const isAlreadyAdded = existing.some(stock => stock === data);
        if (isAlreadyAdded) {
            alert('Already in Watchlist!');
            return;
        }
        const updated = [...existing, data];
        localStorage.setItem('watchlist', JSON.stringify(updated));
        alert('Added to Watchlist!');
    }

  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  const closePrice = [172, 175, 174, 178, 180];
  const ma5 = [170, 172, 173, 175, 177];
  const ma20 = [165, 168, 170, 172, 174];

  const data = {
    labels,
    datasets: [
      {
        label: "Close Price",
        data: closePrice,
        borderColor: "#4bc0c0",
        borderWidth: 2,
      },
      show5Day && {
        label: "5-Day Moving Average",
        data: ma5,
        borderColor: "green",
        borderWidth: 2,
      },
      show20Day && {
        label: "20-Day Moving Average",
        data: ma20,
        borderColor: "red",
        borderWidth: 2,
      },
    ].filter(Boolean),
  };

  return (
    <>
  <div className="wmt-container">
    <p className="wmt-stock-tag" style={{"textAlign":"center"}}>(WMT)</p>

    <h1 className="wmt-title">Walmart Inc. (WMT)</h1> 

    <p className="wmt-watchlist" onClick={() => addToStorage('WMT')}>Add to Watchlist</p><br/>

    <p className="wmt-sector">
      Sector: <strong>Technology</strong>
    </p>

    <div className="price-trend-header">Price Trend</div>

    <div className="checkbox-container">
      <label>
        <input
          type="checkbox"
          checked={show5Day}
          onChange={() => setShow5Day(!show5Day)}
        />
        Show 5-Day Moving Average
      </label>

      <label>
        <input
          type="checkbox"
          checked={show20Day}
          onChange={() => setShow20Day(!show20Day)}
        />
        Show 20-Day Moving Average
      </label>
    </div>

    <div className="chart-wrapper">
      <Line data={data} />
    </div>

     <div className="section">
        <h2 className="section-title">Performance Over Time</h2>
        <div className="content">
          <p>Daily Change: <span className="positive">+0.62%</span></p>
          <p>Weekly Change: <span className="positive">+1.84%</span></p>
          <p>Monthly Change: <span className="negative">-2.15%</span></p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Moving Averages</h2>
        <div className="content">
          <p>5-Day Moving Average: <span className="highlight">167.48</span></p>
          <p>20-Day Moving Average: <span className="highlight">170.92</span></p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Historical Highs and Lows</h2>
        <div className="content">
          <p>All-Time High: <span className="highlight">182.35</span> (Dec 8, 2024)</p>
          <p>All-Time Low: <span className="highlight">0.05</span> (Aug 25, 1972)</p>
          <p>52-Week High: <span className="highlight">182.35</span></p>
          <p>52-Week Low: <span className="highlight">145.20</span></p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Recent News for WMT</h2>
        <div className="content">
          <h3 className="news-title">
            <a href="https://finance.yahoo.com/news/walmart-raises-sales-outlook-boosted-120813659.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAK2AMlcY6sL2fo62wrq6y2XG82m4c0raMUrXavezv4oeyn5rfvJxTq7riNZPVdL03tsgFpgekLQXtw7xQd3D3IWENhcmcec2ckaNXKdtFGF-LyM4F0OoG_Qtn7gWLNPW3EKOebVvHp1fWp9MhFFZfpBM8R22iyOZJAVFyQsHJ8fi">Walmart boosts e-commerce growth and holiday sales forecast</a>
          </h3>
          <p style={{"textAlign":"justify"}}>Walmart reported strong quarterly revenue driven by grocery sales and online growth. The company continues investing in supply chain efficiency and digital expansion initiatives.Walmart reported 27% growth in e-commerce sales globally.
            Walmart also announced that it will move from trading on the New York Stock Exchange to the tech-heavy Nasdaq next month. It’s the latest sign of America's largest private employer working to position itself as tech-forward in order to compete with Amazon.</p>
        </div>
      </div>
  </div>
  </>
);

};

export default Wmt;
