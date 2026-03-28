import React, { useState } from "react";
import "./Dis.css";
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


const Dis = () => {
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
  <div className="dis-container">
    <p className="dis-stock-tag" style={{"textAlign":"center"}}>(DIS)</p>

    <h1 className="dis-title">The Walt Disney Company (DIS)</h1> 

    <p className="dis-watchlist" onClick={() => addToStorage('DIS')}>Add to Watchlist</p><br/>

    <p className="dis-sector">
      Sector: <strong>Consumer Cyclical</strong>
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
    <li>Daily Change: <b className="negative">-1.92%</b></li>
    <li>Weekly Change: <b className="negative">-4.35%</b></li>
    <li>Monthly Change: <b className="negative">-7.18%</b></li>
  </ul>
</div>

<div className="info-section">
  <h2 className="section-title">Moving Averages</h2>
  <ul>
    <li>5-Day Moving Average: <b className="highlight">92.45</b></li>
    <li>20-Day Moving Average: <b className="highlight">95.72</b></li>
  </ul>
</div>

<div className="info-section">
  <h2 className="section-title">Historical Highs and Lows</h2>
  <ul>
    <li>All-Time High: <b className="highlight">203.02</b> (Mar 8, 2021)</li>
    <li>All-Time Low: <b className="highlight">0.46</b> (Jul 8, 1968)</li>
    <li>52-Week High: <b className="highlight">123.74</b></li>
    <li>52-Week Low: <b className="highlight">78.73</b></li>
  </ul>
</div>

<div className="info-section">
  <h2 className="section-title">Recent News for DIS</h2>
  <h3 className="news-title">
    <a href="https://www.wsj.com/business/media/disney-dis-q1-earnings-report-2026-1170ca66">Disney shares rise on strong streaming growth</a>
  </h3>
  <p style={{"textAlign":"justify"}}>
    Disney reported better-than-expected quarterly earnings driven by
    strong Disney+ subscriber growth and improved theme park revenue.
    Investors reacted positively to cost-cutting measures and content expansion plans.
  </p>
</div>

  </div>
);

};

export default Dis;
