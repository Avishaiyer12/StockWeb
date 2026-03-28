import React, { useState } from "react";
import "./V.css";
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


const V = () => {
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
  <div className="v-container">
    <p className="v-stock-tag" style={{"textAlign":"center"}}>(V)</p>

    <h1 className="v-title">Visa Inc. (V)</h1> 

    <p className="v-watchlist" onClick={() => addToStorage('V')}>Add to Watchlist</p><br/>

    <p className="v-sector">
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
          <p>Daily Change: <span className="positive">+0.84%</span></p>
          <p>Weekly Change: <span className="positive">+2.16%</span></p>
          <p>Monthly Change: <span className="positive">+5.42%</span></p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Moving Averages</h2>
        <div className="content">
          <p>5-Day Moving Average: <span className="highlight">275.48</span></p>
          <p>20-Day Moving Average: <span className="highlight">268.92</span></p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Historical Highs and Lows</h2>
        <div className="content">
          <p>All-Time High: <span className="highlight">290.15</span> (Jan 18, 2025)</p>
          <p>All-Time Low: <span className="highlight">11.02</span> (Mar 9, 2009)</p>
          <p>52-Week High: <span className="highlight">290.15</span></p>
          <p>52-Week Low: <span className="highlight">230.12</span></p>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Recent News for V</h2>
        <div className="content">
          <h3 className="news-title">
            <a href="https://www.google.com/search?q=Visa+sees+strong+global+payment+volume+growth+news&sca_esv=ee81a51e8e25352b&biw=1440&bih=773&sxsrf=ANbL-n53HOO3uuMHUeUEsQMHL0N50zDKOg%3A1772027120775&ei=8PyeaayKL9nR1e8P1eO2sAQ&ved=0ahUKEwiswsO44_SSAxXZaPUHHdWxDUYQ4dUDCBE&uact=5&oq=Visa+sees+strong+global+payment+volume+growth+news&gs_lp=Egxnd3Mtd2l6LXNlcnAiMlZpc2Egc2VlcyBzdHJvbmcgZ2xvYmFsIHBheW1lbnQgdm9sdW1lIGdyb3d0aCBuZXdzMggQABiiBBiJBTIFEAAY7wUyBRAAGO8FMggQABiiBBiJBTIIEAAYgAQYogRI4QZQAFgAcAB4AZABAJgB6wGgAesBqgEDMi0xuAEDyAEA-AEC-AEBmAIBoAKBApgDAJIHAzItMaAH8QOyBwMyLTG4B4ECwgcDMy0xyAcPgAgA&sclient=gws-wiz-serp">Visa sees strong global payment volume growth</a>
          </h3>
          <p style={{"textAlign":"justify"}}> Visa reported higher cross-border transaction volumes driven by increased travel and digital payment adoption. The company continues expanding partnerships in fintech and AI-based fraud detection.Visa Inc. has reported strong financial performance, characterized by consistent, high-volume growth in global payments and cross-border transactions as of early 2026. The company is experiencing continued resilience in consumer spending, with revenue and profit growth fueled by increasing digital adoption and travel, despite some regulatory and macroeconomic pressures. </p>
        </div>
      </div>
  </div>
  </>
);

};

export default V;
