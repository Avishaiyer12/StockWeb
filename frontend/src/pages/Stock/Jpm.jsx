import React, { useState } from "react";
import "./Jpm.css";
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


const Jpm = () => {
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
  <div className="jpm-container">
    <p className="jpm-stock-tag" style={{"textAlign":"center"}}>(JPM)</p>

    <h1 className="jpm-title">JPMorgan Chase & Co. (JPM)</h1> 

    <p className="jpm-watchlist" onClick={() => addToStorage('JPM')}>Add to Watchlist</p><br/>

    <p className="jpm-sector">
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

<div className="info-section">
  <h2 className="section-title">Performance Over Time</h2>
  <ul>
    <li>Daily Change: <b className="positive">+0.85%</b></li>
    <li>Weekly Change: <b className="positive">+2.34%</b></li>
    <li>Monthly Change: <b className="negative">-1.76%</b></li>
  </ul>
</div>

<div className="info-section">
  <h2 className="section-title">Moving Averages</h2>
  <ul>
    <li>5-Day Moving Average: <b className="highlight">186.42</b></li>
    <li>20-Day Moving Average: <b className="highlight">182.15</b></li>
  </ul>
</div>

<div className="info-section">
  <h2 className="section-title">Historical Highs and Lows</h2>
  <ul>
    <li>All-Time High: <b className="highlight">198.45</b> (Mar 28, 2024)</li>
    <li>All-Time Low: <b className="highlight">3.21</b> (Oct 9, 1982)</li>
    <li>52-Week High: <b className="highlight">198.45</b></li>
    <li>52-Week Low: <b className="highlight">135.19</b></li>
  </ul>
</div>

<div className="info-section">
  <h2 className="section-title">Recent News for JPM</h2>
  <h3 className="news-title">
    <a href="https://www.reuters.com/business/finance/jpmorgan-maintains-2026-expense-outlook-rotce-target-17-2026-02-23/">JPMorgan reports strong quarterly earnings</a>
  </h3>
  <p style={{"textAlign":"justify"}}>JPMorgan Chase posted higher-than-expected quarterly profits driven by strong investment banking fees and steady consumer credit growth.The bank benefited from higher interest rates boosting net interest income. Investor concerns grew in recent weeks that a market rout in software and technology firms, driven by fears of AI disruption, would hurt mergers and acquisitions as well as the IPO plans of high-growth technology startups.JPMorgan also expects markets' revenue to increase by a mid-teens percentage in the current quarter.
Trading volumes typically surge during periods of market volatility, as sharp price swings drive hedging, repositioning portfolios and seizing short-term opportunities, lifting banks' fees from markets businesses.</p>

  <h3 className="news-title">
    <a href="https://www.jpmorganchase.com/newsroom/press-releases/2024/jpmorganchase-expands-banking-services-in-iowa">JPM expands digital banking services</a>
  </h3>
  <p style={{"textAlign":"justify"}}>JPM announced expansion of its digital banking platform, focusing on AI-driven financial tools and enhanced cybersecurity features to strengthen customer experience and long-term growth. The investment builds on more than 39 years of support for clients and communities across the state, where JPMorganChase serves as the bank of choice for around 20,000 Iowa-based businesses, including small, midsize and large corporate clients in critical industries like transportation, education, food and agribusiness, real estate, retail and manufacturing and more than 400,000 consumer customers.
  </p>
</div>
  </div>
  </>

);

};

export default Jpm;
