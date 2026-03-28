// import React, { useState } from "react";
// import "./Amzn.css";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend
// );


// const Amzn = () => {
//   const [show5Day, setShow5Day] = useState(true);
//   const [show20Day, setShow20Day] = useState(true);

//     const addToStorage = (data) => {
//         const existing = JSON.parse(localStorage.getItem('watchlist')) || [];
//         const isAlreadyAdded = existing.some(stock => stock === data);
//         if (isAlreadyAdded) {
//             alert('Already in Watchlist!');
//             return;
//         }
//         const updated = [...existing, data];
//         localStorage.setItem('watchlist', JSON.stringify(updated));
//         alert('Added to Watchlist!');
//     }

//   const labels = ["Mon", "Tue", "Wed", "Thu", "Fri"];

//   const closePrice = [172, 175, 174, 178, 180];
//   const ma5 = [170, 172, 173, 175, 177];
//   const ma20 = [165, 168, 170, 172, 174];
  
//   const data = {
//     labels,
//     datasets: [
//       {
//         label: "Close Price",
//         data: closePrice,
//         borderColor: "#4bc0c0",
//         borderWidth: 2,
//       },
//       show5Day && {
//         label: "5-Day Moving Average",
//         data: ma5,
//         borderColor: "green",
//         borderWidth: 2,
//       },
//       show20Day && {
//         label: "20-Day Moving Average",
//         data: ma20,
//         borderColor: "red",
//         borderWidth: 2,
//       },
//     ].filter(Boolean),
//   };

//   return (
//     <>
//   <div className="amzn-container">
//     <p className="amzn-stock-tag" style={{"textAlign":"center"}}>(AMZN)</p>

//     <h1 className="amzn-title">Amazon.com Inc. (AMZN)</h1> 

//     <p className="amzn-watchlist" onClick={() => addToStorage('AMZN')}>Add to Watchlist</p><br/>

//     <p className="amzn-sector">
//       Sector: <strong>Technology</strong>
//     </p>

//     <div className="price-trend-header">Price Trend</div>

//     <div className="checkbox-container">
//       <label>
//         <input
//           type="checkbox"
//           checked={show5Day}
//           onChange={() => setShow5Day(!show5Day)}
//         />
//         Show 5-Day Moving Average
//       </label>

//       <label>
//         <input
//           type="checkbox"
//           checked={show20Day}
//           onChange={() => setShow20Day(!show20Day)}
//         />
//         Show 20-Day Moving Average
//       </label>
//     </div>

//     <div className="chart-wrapper">
//       <Line data={data} />
//     </div>
//   </div>

  
//   </>
// );

// };

// export default Amzn;

import React, { useState } from "react";
import "./Amzn.css";
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

const Amzn = () => {
  const [show5Day, setShow5Day] = useState(true);
  const [show20Day, setShow20Day] = useState(true);

  const addToStorage = (data) => {
    const existing = JSON.parse(localStorage.getItem("watchlist")) || [];
    const isAlreadyAdded = existing.some((stock) => stock === data);
    if (isAlreadyAdded) {
      alert("Already in Watchlist!");
      return;
    }
    const updated = [...existing, data];
    localStorage.setItem("watchlist", JSON.stringify(updated));
    alert("Added to Watchlist!");
  };

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
      <div className="amzn-container">
        <p className="amzn-stock-tag" style={{ textAlign: "center" }}>
          (AMZN)
        </p>

        <h1 className="amzn-title">Amazon.com Inc. (AMZN)</h1>

        <p
          className="amzn-watchlist"
          onClick={() => addToStorage("AMZN")}
        >
          Add to Watchlist
        </p>

        <p className="amzn-sector">
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

        <h2 className="section-title">Performance Over Time</h2>
<ul className="info-list">
  <li>Daily Change: <b>-2.84%</b></li>
  <li>Weekly Change: <b>-6.12%</b></li>
  <li>Monthly Change: <b>-9.45%</b></li>
</ul>

<h2 className="section-title">Moving Averages</h2>
<ul className="info-list">
  <li>5-Day Moving Average: <b>178.45</b></li>
  <li>20-Day Moving Average: <b>184.72</b></li>
</ul>

<h2 className="section-title">Historical Highs and Lows</h2>
<ul className="info-list">
  <li>All-Time High: <b>188.65</b> (Jul 8, 2024)</li>
  <li>All-Time Low: <b>0.07</b> (May 15, 1997)</li>
  <li>52-Week High: <b>188.65</b></li>
  <li>52-Week Low: <b>118.35</b></li>
</ul>

<h2 className="section-title">Recent News for AMZN</h2>
<ul className="news-list">

  <li>
    <a href="https://economictimes.indiatimes.com/news/international/us/amazon-earnings-amazon-stock-slides-after-earnings-despite-strong-aws-results-and-ai-momentum/articleshow/127953413.cms?from=mdr"><span>Amazon shares dip despite strong AWS earnings</span></a>
    <p style={{textAlign:"justify", color:"black", fontSize:"17px"}}>
      Amazon reported better-than-expected quarterly earnings driven by strong AWS cloud revenue growth. 
      However, shares declined as investors reacted to cautious forward guidance and rising fulfillment costs.
      The company continues expanding its AI infrastructure and logistics network globally.
    </p>
  </li>

  <li>
    <a href="https://www.aboutamazon.com/news/company-news/amazon-data-center-louisiana-new-jobs"><span>Amazon increases AI and data center investments</span></a>
    <p style={{textAlign:"justify", color:"black", fontSize:"17px"}}>
      Amazon announced major investments in AI-enabled data centers to support growing demand for cloud computing.
      AWS remains a key revenue driver, and the company is integrating generative AI tools into its e-commerce
      and enterprise cloud services to stay competitive with Microsoft and Google.
    </p>
  </li>
</ul>
      </div>
    </>
  );
};

export default Amzn;