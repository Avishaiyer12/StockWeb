import React, { useState } from "react";
import "./Pg.css";
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


const Pg = () => {
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
  <div className="pg-container">
    <p className="pg-stock-tag" style={{"textAlign":"center"}}>(PG)</p>

    <h1 className="pg-title">Procter & Gamble (PG)</h1> 

    <p className="pg-watchlist" onClick={() => addToStorage('PG')}>Add to Watchlist</p><br/>

    <p className="pg-sector">
      Sector: <strong>Consumer Staples</strong>
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
        <ul className="info-list">
          <li>Daily Change: <span className="negative">-1.82%</span></li>
          <li>Weekly Change: <span className="negative">-3.45%</span></li>
          <li>Monthly Change: <span className="positive">+2.18%</span></li>
        </ul>
      </div>

      <div className="section">
        <h2 className="section-title">Moving Averages</h2>
        <ul className="info-list">
          <li>5-Day Moving Average: <span className="highlight">156.42</span></li>
          <li>20-Day Moving Average: <span className="highlight">158.76</span></li>
        </ul>
      </div>

      <div className="section">
        <h2 className="section-title">Historical Highs and Lows</h2>
        <ul className="info-list">
          <li>All-Time High: <span className="highlight">165.35</span> (Aug 15, 2024)</li>
          <li>All-Time Low: <span className="highlight">0.34</span> (Jan 5, 1970)</li>
          <li>52-Week High: <span className="highlight">165.35</span></li>
          <li>52-Week Low: <span className="highlight">142.90</span></li>
        </ul>
      </div>

      <div className="section">
        <h2 className="section-title">Recent News for PG</h2>
        <div className="news-box">
          <h3 className="news-title">
            <a href="https://worldaerosols.com/news/pg-reports-steady-q1-growth-but-home-care-faces-aerosol-headwinds/">P&G reports steady growth amid strong consumer demand</a>
          </h3>
          <p style={{"textAlign":"justify"}}>Procter & Gamble posted better-than-expected quarterly earnings driven by strong demand in beauty and healthcare segments. The company continues investing in product innovation and global expansion.P&G has been under mounting pressure to reformulate and decarbonise its aerosol portfolio amid tightening environmental regulation and shifting retailer policies. Aerosol propellants, traditionally reliant on hydrocarbons, have come under scrutiny for their carbon footprint and potential air-quality impacts.
          In recent years, the company has pledged to phase down fossil-fuel-based propellants and explore alternatives such as compressed air and nitrogen. </p>
        </div>
      </div>
  </div>
  </>
);
};

export default Pg;
