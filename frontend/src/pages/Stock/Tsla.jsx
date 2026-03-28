import React, { useState } from "react";
import "./Tsla.css";
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


const Tsla = () => {
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
  <div className="tsla-container">
    <p className="tsla-stock-tag" style={{"textAlign":"center"}}>(TSLA)</p>

    <h1 className="tsla-title">Tesla Inc. (TSLA)</h1> 

    <p className="tsla-watchlist" onClick={() => addToStorage('TSLA')}>Add to Watchlist</p><br/>

    <p className="tsla-sector">
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
          <p>Daily Change: <span className="negative">-2.31%</span></p>
          <p>Weekly Change: <span className="positive">+4.82%</span></p>
          <p>Monthly Change: <span className="positive">+12.45%</span></p>
        </div>
      </div>

      {/* Moving Average Section */}
      <div className="section">
        <h2 className="section-title">Moving Averages</h2>
        <div className="content">
          <p>5-Day Moving Average: <span className="highlight">198.34</span></p>
          <p>20-Day Moving Average: <span className="highlight">189.72</span></p>
        </div>
      </div>

      {/* Historical Section */}
      <div className="section">
        <h2 className="section-title">Historical Highs and Lows</h2>
        <div className="content">
          <p>All-Time High: <span className="highlight">414.50</span> (Nov 4, 2021)</p>
          <p>All-Time Low: <span className="highlight">10.67</span> (Jul 1, 2010)</p>
          <p>52-Week High: <span className="highlight">299.29</span></p>
          <p>52-Week Low: <span className="highlight">138.80</span></p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Recent News for TSLA</h2>
        <div className="content">
          <h3 className="news-title">
            <a href="https://www.google.com/search?q=Tesla+expands+EV+production+capacity+globally+news&sca_esv=ee81a51e8e25352b&biw=1440&bih=773&sxsrf=ANbL-n46syVhEZCQ7oUOAMbIZO5NEz1bkg%3A1772026692904&ei=RPueaaryNoWNvr0P3eeloAk&ved=0ahUKEwiqpMDs4fSSAxWFhq8BHd1zCZQQ4dUDCBE&uact=5&oq=Tesla+expands+EV+production+capacity+globally+news&gs_lp=Egxnd3Mtd2l6LXNlcnAiMlRlc2xhIGV4cGFuZHMgRVYgcHJvZHVjdGlvbiBjYXBhY2l0eSBnbG9iYWxseSBuZXdzMgUQABjvBTIFEAAY7wUyCBAAGIAEGKIEMgUQABjvBTIFEAAY7wVIpR5Q4BJYsBhwAXgBkAEAmAHRAaAB4wKqAQUwLjEuMbgBA8gBAPgBAvgBAZgCA6ACzwPCAgoQABiwAxjWBBhHmAMAiAYBkAYIkgcHMS4xLjAuMaAHsgmyBwcwLjEuMC4xuAfHA8IHBzItMi41LTHIB2SACAA&sclient=gws-wiz-serp">Tesla expands EV production capacity globally</a>
          </h3>
          <p style={{"textAlign":"justify"}}>Tesla reported strong quarterly vehicle deliveries and continues expanding its Gigafactory production lines. Investors remain focused on AI initiatives and autonomous driving development.Tesla is aggressively expanding its global EV production capacity in 2026, aiming for long-term goals that include a new Gigafactory in Nuevo León, Mexico, expected to be operational soon, and expansion of battery production to support increasing demand., aiming for long-term goals that include a new Gigafactory in Nuevo León, Mexico, expected to be operational soon, and expansion of battery production to support increasing demand. The company is maximizing output at existing Texas and Berlin factories, while focusing on developing a next-generation, more affordable electric vehicle, potentially produced in India and Mexico. </p>
        </div>
      </div>
  </div>
  </>
);

};

export default Tsla;
