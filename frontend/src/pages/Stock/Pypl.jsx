import React, { useState } from "react";
import "./Pypl.css";
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


const Pypl = () => {
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
  <div className="pypl-container">
    <p className="pypl-stock-tag" style={{"textAlign":"center"}}>(PYPL)</p>

    <h1 className="pypl-title">PayPal Holdings Inc. (PYPL)</h1> 

    <p className="pypl-watchlist" onClick={() => addToStorage('PYPL')}>Add to Watchlist</p><br/>

    <p className="pypl-sector">
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
        <ul className="info-list">
          <li>Daily Change: <span className="negative">-1.45%</span></li>
          <li>Weekly Change: <span className="positive">+2.12%</span></li>
          <li>Monthly Change: <span className="positive">+6.38%</span></li>
        </ul>
      </div>

      <div className="section">
        <h2 className="section-title">Moving Averages</h2>
        <ul className="info-list">
          <li>5-Day Moving Average: <span className="highlight">64.85</span></li>
          <li>20-Day Moving Average: <span className="highlight">62.40</span></li>
        </ul>
      </div>
      <div className="section">
        <h2 className="section-title">Historical Highs and Lows</h2>
        <ul className="info-list">
          <li>All-Time High: <span className="highlight">310.16</span> (Jul 26, 2021)</li>
          <li>All-Time Low: <span className="highlight">30.52</span> (May 24, 2016)</li>
          <li>52-Week High: <span className="highlight">76.54</span></li>
          <li>52-Week Low: <span className="highlight">50.25</span></li>
        </ul>
      </div>

      <div className="section">
        <h2 className="section-title">Recent News for PYPL</h2>
        <div className="news-box">
          <h3 className="news-title">
            <a href="https://www.google.com/search?q=PayPal+focuses+on+AI-driven+payment+innovation+news&sca_esv=ee81a51e8e25352b&sxsrf=ANbL-n6322WmfDGvazPNbEPF0Mc1Qlac4Q%3A1772026297343&ei=ufmeaa2fFPmTvr0PgZ6v6A4&biw=1440&bih=773&ved=0ahUKEwjt3_Cv4PSSAxX5ia8BHQHPC-0Q4dUDCBE&uact=5&oq=PayPal+focuses+on+AI-driven+payment+innovation+news&gs_lp=Egxnd3Mtd2l6LXNlcnAiM1BheVBhbCBmb2N1c2VzIG9uIEFJLWRyaXZlbiBwYXltZW50IGlubm92YXRpb24gbmV3czIFEAAY7wUyBRAAGO8FMggQABiiBBiJBTIIEAAYgAQYogRI3QpQAFiQBXAAeACQAQCYAc8BoAHlAqoBBTAuMS4xuAEDyAEA-AEC-AEBmAICoAKAA5gDAJIHBTAuMS4xoAf-BrIHBTAuMS4xuAeAA8IHBTItMS4xyAcVgAgA&sclient=gws-wiz-serp">PayPal focuses on AI-driven payment innovation</a>
          </h3>
          <p style={{"textAlign":"justify"}}>PayPal reported steady transaction growth and is expanding its AI-powered fraud detection systems. Investors reacted positively to improved margins and cost restructuring efforts.PayPal is heavily focusing on AI-driven payment innovation to transition from a pure payment utility to a comprehensive "commerce assistant" and AI-native platform. Under CEO Alex Chriss, the company is leveraging its massive data set—comprising over 20 trillion user interactions—to enhance fraud detection, personalize the checkout experience, and facilitate "agentic commerce".</p>
        </div>
      </div>
  </div>
  </>
);

};

export default Pypl;
