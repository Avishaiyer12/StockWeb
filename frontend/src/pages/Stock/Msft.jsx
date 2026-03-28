import React, { useState } from "react";
import "./Msft.css";
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


const Msft = () => {
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
  <div className="msft-container">
    <p className="msft-stock-tag" style={{"textAlign":"center"}}>(MSFT)</p>

    <h1 className="msft-title">Microsoft Corporation (MSFT)</h1> 

    <p className="msft-watchlist" onClick={() => addToStorage('MSFT')}>Add to Watchlist</p><br/>

    <p className="msft-sector">
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

  <div className="stock-container">
      <h2 className="section-title">Performance Over Time</h2>
      <ul>
        <li>Daily Change: <strong>-2.84%</strong></li>
        <li>Weekly Change: <strong>-6.12%</strong></li>
        <li>Monthly Change: <strong>-9.45%</strong></li>
      </ul>

      <hr />
      <h2 className="section-title">Moving Averages</h2>
      <ul>
        <li>5-Day Moving Average: <strong>412.38</strong></li>
        <li>20-Day Moving Average: <strong>421.91</strong></li>
      </ul>

      <hr />
      <h2 className="section-title">Historical Highs and Lows</h2>
      <ul>
        <li>All-Time High: <strong>466.19</strong> (Jul 2024)</li>
        <li>All-Time Low: <strong>0.06</strong> (1986)</li>
        <li>52-Week High: <strong>466.19</strong></li>
        <li>52-Week Low: <strong>309.45</strong></li>
      </ul>

      <hr />

      <h2 className="section-title">Recent News for MSFT</h2>

      <div className="news-item">
        <p className="news-title green"><a href="https://siliconangle.com/2026/01/28/microsofts-stock-declines-cloud-growth-dips-40/">
        Microsoft shares dip amid cloud growth concerns </a>
        </p>
        <p style={{"textAlign":"justify"}}>
          Shares of Microsoft Corp. dropped more than 5% in extended trading today even though the technology giant reported better-than-expected financial results, as its Azure cloud revenue sagged in the latest quarter.The company delivered second-quarter earnings before certain costs such as stock compensation of $4.14 per share, easily beating Wall Street’s forecast of $3.97 per share. Revenue for the period rose 17% from a year ago, to $81.27 billion, surpassing the analyst consensus estimate of $80.27 billion.
          All told, net income came to $38.46 billion in the quarter, up from $24.11 billion a year earlier. Microsoft’s adjusted earnings excluded the impact of its investments in OpenAI Group PBC. Gross margin, at 68%, declined to its narrowest in three years.
        </p>
      </div>

      <div className="news-item">
        <p className="news-title green pl-20px"><a href="https://www.google.com/search?q=microsoft+doubles+down+on+ai+investments+news&sca_esv=0cdd55f649411b52&biw=1440&bih=773&sxsrf=ANbL-n7TJOadvn18sJ5mRZ58isSn3HJxlA%3A1770641213690&ei=PdeJaaLSKY22vr0PhsSA6Ac&oq=microsoft+doubles+down+on+ai+investments&gs_lp=Egxnd3Mtd2l6LXNlcnAiKG1pY3Jvc29mdCBkb3VibGVzIGRvd24gb24gYWkgaW52ZXN0bWVudHMqAggAMgcQIxiwAxgnMgoQABiwAxjWBBhHMgoQABiwAxjWBBhHMgoQABiwAxjWBBhHMgoQABiwAxjWBBhHMgoQABiwAxjWBBhHMgoQABiwAxjWBBhHMgoQABiwAxjWBBhHMgoQABiwAxjWBBhHSIcUUABYAHABeAGQAQCYAQCgAQCqAQC4AQPIAQCYAgGgAgaYAwCIBgGQBgmSBwExoAcAsgcAuAcAwgcDMi0xyAcFgAgA&sclient=gws-wiz-serp">
          Microsoft doubles down on AI investments </a>
        </p>
        <p style={{"textAlign":"justify"}}>
        Microsoft is aggressively accelerating its investments in artificial intelligence (AI) throughout late 2025 and into 2026, with planned infrastructure spending reaching roughly $80 billion for fiscal year 2025 to build out AI-enabled data centers. CEO Satya Nadella has positioned AI as the central strategic thrust for the company, focusing heavily on expanding global hyperscale capacity, developing custom silicon, and integrating AI agents into core products. 
        Strategic Partnerships and Technology : Vodafone ($1.5 Billion): A 10-year partnership with Vodafone to utilize generative AI and Azure services, focusing on customer-focused, cloud-based AI services ,Nebius Group ($17.4 Billion): A significant five-year deal was reached with AI infrastructure firm Nebius for GPU capacity, allowing Microsoft to accelerate its AI cloud business ,OpenAI & Autonomous Agents: Microsoft is deepening its partnership with OpenAI while investing in "AI Agents" that go beyond simple chat to perform autonomous work using software apps and tools. 
        </p>
      </div>

    </div>
</>
);

};

export default Msft;
