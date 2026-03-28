import React, { useState } from "react";
import "./Jnj.css";
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


const Jnj = () => {
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
  <div className="jnj-container">
    <p className="jnj-stock-tag" style={{"textAlign":"center"}}>(JNJ)</p>

    <h1 className="jnj-title">Johnson & Johnson (JNJ)</h1> 

    <p className="jnj-watchlist" onClick={() => addToStorage('JNJ')}>Add to Watchlist</p><br/>

    <p className="jnj-sector">
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
  </div>

  <div className="info-section">
  <h2 className="section-title">Performance Over Time</h2>
  <ul>
    <li>Daily Change: <b className="negative">-1.18%</b></li>
    <li>Weekly Change: <b className="negative">-2.94%</b></li>
    <li>Monthly Change: <b className="negative">-5.12%</b></li>
  </ul>
</div>

<div className="info-section">
  <h2 className="section-title">Moving Averages</h2>
  <ul>
    <li>5-Day Moving Average: <b className="highlight">156.42</b></li>
    <li>20-Day Moving Average: <b className="highlight">160.85</b></li>
  </ul>
</div>

<div className="info-section">
  <h2 className="section-title">Historical Highs and Lows</h2>
  <ul>
    <li>All-Time High: <b className="highlight">186.69</b> (Apr 25, 2022)</li>
    <li>All-Time Low: <b className="highlight">0.24</b> (Sep 24, 1970)</li>
    <li>52-Week High: <b className="highlight">175.97</b></li>
    <li>52-Week Low: <b className="highlight">143.13</b></li>
  </ul>
</div>

<div className="info-section">
  <h2 className="section-title">Recent News for JNJ</h2>

  <h3 className="news-title">
    <a href="https://www.contractpharma.com/breaking-news/johnson-johnson-to-invest-over-1b-in-cell-therapy-manufacturing-facility-in-pa/">Johnson & Johnson posts strong pharmaceutical growth</a>
  </h3>
  <p style={{"textAlign":"justify"}}>JNJ reported higher quarterly revenue driven by strong demand for its
    oncology and immunology drugs. The company also raised its full-year
    guidance following steady global sales performance.
  </p>

  <h3 className="news-title">
    <a href="https://www.reuters.com/legal/transactional/jj-buy-cancer-therapy-developer-halda-therapeutics-305-billion-2025-11-17/">JNJ expands medical devices portfolio</a>
  </h3>
  <p style={{"textAlign":"justify"}}>
    Johnson & Johnson announced expansion in its medical technology division,
    focusing on robotic surgery systems and cardiovascular solutions to
    strengthen long-term growth strategy.
  </p>
</div>
</>
);

};

export default Jnj;
