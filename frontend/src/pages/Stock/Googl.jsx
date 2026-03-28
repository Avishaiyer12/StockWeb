import React, { useState } from "react";
import "./Googl.css";
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


const Googl = () => {
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
  <div className="googl-container">
    <p className="googl-stock-tag" style={{"textAlign":"center"}}>(GOOGL)</p>

    <h1 className="googl-title">Alphabet Inc. (GOOGL)</h1> 

    <p className="googl-watchlist" onClick={() => addToStorage('GOOGL')}>Add to Watchlist</p><br/>

    <p className="googl-sector">
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

  <h2 className="section-title">Performance Over Time</h2>
<ul className="info-list">
  <li>Daily Change: <b>-1.96%</b></li>
  <li>Weekly Change: <b>-4.88%</b></li>
  <li>Monthly Change: <b>-7.32%</b></li>
</ul>

<h2 className="section-title">Moving Averages</h2>
<ul className="info-list">
  <li>5-Day Moving Average: <b>138.42</b></li>
  <li>20-Day Moving Average: <b>142.15</b></li>
</ul>

<h2 className="section-title">Historical Highs and Lows</h2>
<ul className="info-list">
  <li>All-Time High: <b>151.55</b> (Jan 30, 2025)</li>
  <li>All-Time Low: <b>49.95</b> (Oct 30, 2022)</li>
  <li>52-Week High: <b>151.55</b></li>
  <li>52-Week Low: <b>120.21</b></li>
</ul>

<h2 className="section-title">Recent News for GOOGL</h2>
<ul className="news-list">
  <li>
    <span className="news-title">
      <a href="https://www.investors.com/news/technology/google-stock-falls-ai-news-developer-io-event/">Google shares fall amid AI competition pressure</a>
    </span>
    <p style={{"textAlign":"justify"}}>We believe Google's 'total reimagining of search' is taking shape as AI Mode integrates what have been somewhat disparate AI products," said JPMorgan analyst Doug Anmuth in a report. In addition, AI Mode will utilize Google's newest models to provide a deeper exploration of topics. And, AI Mode taps into Google's datasets for real-time information.  AI Mode connects to other Google apps and provides personalized responses.</p>
  </li>
  <li>
    <span className="news-title">
    <a href="https://www.outlookbusiness.com/corporate/alphabet-raises-20-bn-to-supercharge-ai-data-cent">Alphabet expands cloud and AI data centers</a>
    </span>
    <p style={{"textAlign":"justify"}}>Google CEO Sundar Pichai Summary of this article.Alphabet raised $20 billion through a corporate bond sale to fund its aggressive expansion in AI hardware, data centres and cloud infrastructure.The bond issue drew strong investor demand of over $100 billion, allowing Alphabet to borrow at lower-than-expected interest rates amid a broader Big Tech borrowing spree.The fundraise supports Alphabet's sharply higher capital spending plans as it reported strong growth in Cloud and overall revenue in the latest quarter.Google parent Alphabet has rasied $20 billion via corporate bond sale on Monday.</p>
  </li>

</ul>
</>
);

};

export default Googl;
