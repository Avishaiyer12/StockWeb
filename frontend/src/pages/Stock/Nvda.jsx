import React, { useState } from "react";
import "./Nvda.css";
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


const Nvda = () => {
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
  <div className="nvda-container">
    <p className="nvda-stock-tag" style={{"textAlign":"center"}}>(NVDA)</p>

    <h1 className="nvda-title">NVIDIA Corporation (NVDA)</h1> 

    <p className="nvda-watchlist" onClick={() => addToStorage('NVDA')}>Add to Watchlist</p><br/>

    <p className="nvda-sector">
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

    {/* Performance Section */}
<div className="info-section">
  <h2 className="section-title">Performance Over Time</h2>
  <ul>
    <li>Daily Change: <b className="positive">+3.72%</b></li>
    <li>Weekly Change: <b className="positive">+8.45%</b></li>
    <li>Monthly Change: <b className="positive">+12.90%</b></li>
  </ul>
</div>

{/* Moving Averages */}
<div className="info-section">
  <h2 className="section-title">Moving Averages</h2>
  <ul>
    <li>5-Day Moving Average: <b className="highlight">912.34</b></li>
    <li>20-Day Moving Average: <b className="highlight">875.66</b></li>
  </ul>
</div>

{/* Historical Highs and Lows */}
<div className="info-section">
  <h2 className="section-title">Historical Highs and Lows</h2>
  <ul>
    <li>All-Time High: <b className="highlight">974.00</b> (Jun 18, 2024)</li>
    <li>All-Time Low: <b className="highlight">0.40</b> (Apr 26, 1999)</li>
    <li>52-Week High: <b className="highlight">974.00</b></li>
    <li>52-Week Low: <b className="highlight">403.11</b></li>
  </ul>
</div>

{/* News Section */}
<div className="info-section">
  <h2 className="section-title">Recent News for NVDA</h2>

  <h3 className="news-title">
    <a href="https://economictimes.indiatimes.com/news/international/us/nvidia-stock-price-today-nvidia-expected-more-nvidia-delivered-even-more-is-ai-bubble-narrative-fading/articleshow/125462265.cms?from=mdr">NVIDIA stock surges on AI chip demand </a>
  </h3>
  <p style={{"textAlign":"justify"}}>NVIDIA reported record-breaking quarterly revenue driven by strong demand for its AI-focused GPUs and data center chips. Analysts raised price targets following continued dominance in the artificial intelligence market.Nvidia surged 4% after reporting earnings and revenue that beat expectations. The company issued a stronger fourth-quarter forecast and said demand for its new Blackwell chips is “off the charts.” CEO Jensen Huang rejected AI-bubble fears.</p>

  <h3 className="news-title">
   <a href="https://nvidianews.nvidia.com/news/nvidia-expands-omniverse-with-generative-physical-ai">NVDA expands next-gen semiconductor production </a>
  </h3>
  <p style={{"textAlign":"justify"}}>The company announced partnerships to expand advanced chip manufacturing capacity, strengthening its position in high-performance computing, gaming, and AI infrastructure.NVIDIA today announced generative AI models and blueprints that expand NVIDIA Omniverse™ integration further into physical AI applications such as robotics, autonomous vehicles and vision AI. Global leaders in software development and professional services are using Omniverse to develop new products and services that will accelerate the next era of industrial AI.</p>
</div>
  </div>
  </>
);

};

export default Nvda;
