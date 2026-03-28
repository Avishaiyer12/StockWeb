import React, { useState } from "react";
import "./Aapl.css";
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

const Aapl = () => {
  const [show5Day, setShow5Day] = useState(true);
  const [show20Day, setShow20Day] = useState(true);

  const addToStorage = (data) => {
    const existing = JSON.parse(localStorage.getItem("watchlist")) || [];
    if (existing.includes(data)) {
      alert("Already in Watchlist!");
      return;
    }
    localStorage.setItem("watchlist", JSON.stringify([...existing, data]));
    alert("Added to Watchlist!");
  };

  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const closePrice = [212, 214, 213, 216, 214];
  const ma5 = [210, 212, 213, 214, 214];
  const ma20 = [205, 207, 209, 211, 212];

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
    <div className="aapl-container">
      <p className="aapl-stock-tag">(AAPL)</p>
      <h1 className="aapl-title">Apple Inc.</h1>

      <p className="aapl-watchlist" onClick={() => addToStorage("AAPL")}>
        Add to Watchlist
      </p>

      <div className="checkbox-container">
        <label>
          <input
            type="checkbox"
            checked={show5Day}
            onChange={() => setShow5Day(!show5Day)}
          />
          Show 5-Day MA
        </label>

        <label>
          <input
            type="checkbox"
            checked={show20Day}
            onChange={() => setShow20Day(!show20Day)}
          />
          Show 20-Day MA
        </label>
      </div>

      <div className="chart-wrapper">
        <Line data={data} />
      </div>
    
     <h2 className="section-title">Performance Over Time</h2>
      <ul className="info-list">
        <li>Daily Change: <b>-7.289%</b></li>
        <li>Weekly Change: <b>-15.194%</b></li>
        <li>Monthly Change: <b>-21.203%</b></li>
      </ul>

      <h2 className="section-title">Moving Averages</h2>
      <ul className="info-list">
        <li>5-Day Moving Average: <b>214.152</b></li>
        <li>20-Day Moving Average: <b>217.2535</b></li>
      </ul>

      <h2 className="section-title">Historical Highs and Lows</h2>
      <ul className="info-list">
        <li>All-Time High: <b>259.02</b> (Dec 26, 2024)</li>
        <li>All-Time Low: <b>188.38</b> (Apr 4, 2025)</li>
        <li>52-Week High: <b>259.02</b></li>
        <li>52-Week Low: <b>188.38</b></li>
      </ul>

      <h2 className="section-title">Recent News for AAPL</h2>
      <ul className="news-list">
        <li>
          <a href="https://appleinsider.com/articles/25/03/12/morgan-stanley-slashes-aapl-price-target-to-252-on-lower-iphone-upgrade-rate-fears#:~:text=Morgan%20Stanley%20slashes%20AAPL%20price,lower%20iPhone%20upgrade%20rate%20fears&text=A%20noted%20analyst%20has%20slashed,Siri%20with%20Apple%20Intelligence%20rollout."><span> Morgan Stanley slashes AAPL price target to $252 </span> </a>
          <p style={{"textAlign":"justify","color":"black","fontSize":"17px"}}>A noted analyst has slashed his expectation for Apple stock by about 10% given what he sees to be slower iPhone upgrade rates because of tariffs, and a delayed Siri with Apple Intelligence rollout.In a note to investors written by Morgan Stanley's Erik Woodring, Apple's headwinds have been re-evaluated. The most recent fears for Apple's bottom line appear to be the postponement of Siri upgrades, higher product import costs because of Trump administration tariffs, with both leading to lower earnings per share.
            While Woodring remains bullish on what may be a redesigned iPhone 17 driving sales, he's less certain about other avenues of success.</p>
        </li>
        <li>
          <a href="https://www.cnbc.com/2025/04/02/-apple-leads-drop-in-tech-stocks-after-trump-tariff-announcement.html#:~:text=Apple%20leads%20a%20drop%20in%20tech%20stocks%20after%20Trump%20tariff%20announcement,-Published%20Wed%2C%20Apr&text=Tech%20stocks%20fell%20in%20late,nearly%206%25%20in%20extended%20trading."><span> Apple stock drops almost 10% on new tariffs </span></a>
          <p style={{"textAlign":"justify","color":"black","fontSize":"17px"}}>Global supply chain concerns affect market sentiment.The majority of Apple’s revenue comes from devices manufactured primarily in China and a handful of other Asian countries. Nvidia
            , which manufactures new chips in Taiwan and assembles its artificial intelligence systems in Mexico and elsewhere, fell about 4%, while electric vehicle company Tesla
            dropped 4.5%.Across the rest of the megacap universe, Alphabet, Amazon and Meta all dropped between 2.5% and 5%, and Microsoft was down by almost 2%.Stocks broadly got hit by Trump’s announcements. An exchange-traded fund tracking the S&P 500 slid 2.8%, while an ETF following the Nasdaq 100 lost more than 3%.</p>
        </li>
        <li>
         <a href="https://www.cnbc.com/2025/03/07/apple-delays-siri-ai-improvements-to-2026.html"><span> Apple delaying Siri’s AI upgrade </span></a>
          <p style={{"textAlign":"justify","color":"black","fontSize":"17px"}}>The delay highlights some of the challenges Apple faces developing a next-generation voice assistant that uses cutting-edge artificial intelligence technology to be more useful and conversational. The pressure has heightened since the arrival of OpenAI’s ChatGPT that launched in late 2022 and ushered in the era of generative AI. 
            Besides OpenAI, Apple risks falling behind rivals including Amazon, which announced an upgraded Alexa voice assistant last month but hasn’t released it, and Google, which is developing similar capabilities with its Gemini assistant. But all consumer voice assistants have had issues with incorrect answers and task automation.</p>
        </li>
      </ul>
    </div>
  );
};

export default Aapl;
