import React, { useState } from "react";
import "./Nflx.css";
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


const Nflx = () => {
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
  <div className="nflx-container">
    <p className="nflx-stock-tag" style={{"textAlign":"center"}}>(NFLX)</p>

    <h1 className="nflx-title">Netflix Inc. (NFLX)</h1> 

    <p className="nflx-watchlist" onClick={() => addToStorage('NFLX')}>Add to Watchlist</p><br/>

    <p className="nflx-sector">
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
    <li>Daily Change: <b className="positive">+2.15%</b></li>
    <li>Weekly Change: <b className="positive">+5.48%</b></li>
    <li>Monthly Change: <b className="negative">-3.27%</b></li>
  </ul>
</div>

{/* Moving Averages */}
<div className="info-section">
  <h2 className="section-title">Moving Averages</h2>
  <ul>
    <li>5-Day Moving Average: <b className="highlight">615.84</b></li>
    <li>20-Day Moving Average: <b className="highlight">602.19</b></li>
  </ul>
</div>

{/* Historical Highs and Lows */}
<div className="info-section">
  <h2 className="section-title">Historical Highs and Lows</h2>
  <ul>
    <li>All-Time High: <b className="highlight">700.99</b> (Nov 17, 2021)</li>
    <li>All-Time Low: <b className="highlight">0.38</b> (May 23, 2002)</li>
    <li>52-Week High: <b className="highlight">689.32</b></li>
    <li>52-Week Low: <b className="highlight">344.73</b></li>
  </ul>
</div>

{/* News Section */}
<div className="info-section">
  <h2 className="section-title">Recent News for NFLX</h2>

  <h3 className="news-title">
    <a href="https://economictimes.indiatimes.com/markets/stocks/earnings/netflix-subscriber-growth-beats-expectations/articleshow/94953924.cms?from=mdr">Netflix subscriber growth beats expectations</a>
  </h3>
  <p style={{"textAlign":"justify"}}>Netflix reported stronger-than-expected subscriber additions driven by international expansion and growth in its ad-supported streaming tier. Revenue increased as content investments paid off.The ad-discounted tier, a first for Netflix, will roll out in Australia, Brazil, Britain, Canada, France, Germany, Italy, Japan, South Korea, Mexico, Spain and the United States.
    "We are looking at a very light ad load with no more than four to five minutes of ads per hour, and including some very tight frequency caps so that members don't see the same ad repeatedly," Peters said. </p>

  <h3 className="news-title">
    <a href="https://www.nasdaq.com/articles/beyond-streaming-netflixs-quiet-moves-gaming-and-live-experiences">NFLX expands gaming and live content strategy</a>
  </h3>
  <p style={{"textAlign":"justify"}}>The company announced new live sports and interactive gaming initiatives,aiming to diversify revenue streams and strengthen user engagement across global markets.Netflix (NASDAQ: NFLX) has built its empire on streaming video content, but the company isn't content to stop there. While investors focus on its subscriber growth and ad revenue, Netflix is quietly laying the groundwork for new frontiers: gaming, immersive real-world venues, and live sports and other events.
      These initiatives may not move the needle today, but they reveal Netflix's ambitions to be more than just a content platform. </p>
</div>
  </div>
  </>
);

};

export default Nflx;
