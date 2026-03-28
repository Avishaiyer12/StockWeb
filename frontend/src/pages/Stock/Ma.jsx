import React, { useState } from "react";
import "./Ma.css";
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


const Ma = () => {
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
  <div className="ma-container">
    <p className="ma-stock-tag" style={{"textAlign":"center"}}>(MA)</p>

    <h1 className="ma-title">Mastercard Inc. (MA)</h1> 

    <p className="ma-watchlist" onClick={() => addToStorage('MA')}>Add to Watchlist</p><br/>

    <p className="ma-sector">
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
    <li>Daily Change: <b className="positive">+1.42%</b></li>
    <li>Weekly Change: <b className="positive">+3.18%</b></li>
    <li>Monthly Change: <b className="positive">+6.75%</b></li>
  </ul>
</div>

{/* Moving Averages */}
<div className="info-section">
  <h2 className="section-title">Moving Averages</h2>
  <ul>
    <li>5-Day Moving Average: <b className="highlight">468.22</b></li>
    <li>20-Day Moving Average: <b className="highlight">455.90</b></li>
  </ul>
</div>

{/* Historical Highs and Lows */}
<div className="info-section">
  <h2 className="section-title">Historical Highs and Lows</h2>
  <ul>
    <li>All-Time High: <b className="highlight">490.00</b> (Feb 12, 2025)</li>
    <li>All-Time Low: <b className="highlight">4.75</b> (Nov 20, 2006)</li>
    <li>52-Week High: <b className="highlight">490.00</b></li>
    <li>52-Week Low: <b className="highlight">359.77</b></li>
  </ul>
</div>

{/* News Section */}
<div className="info-section">
  <h2 className="section-title">Recent News for MA</h2>

  <h3 className="news-title">
    <a href="https://www.mastercard.com/news/latin-america/en/newsroom/press-releases/pr-en/2020/june/mastercard-research-shows-surge-in-digital-payments-as-ecommerce-reaches-new-heights-around-the-world/">Mastercard reports surge in digital payment volumes</a>
  </h3>
  <p style={{"textAlign":"justify"}}>Mastercard posted strong quarterly earnings as global card spending increased across travel, e-commerce, and cross-border transactions. Higher transaction volumes boosted revenue growth. . Consumers are increasingly moving away from cash and opting for contact-free and digital payments experiences – and they don’t expect to go back. Ecommerce is also seeing a surge in growth rates, according to Mastercard data, as consumers increasingly shop online.“Latin America has long been at the forefront of the digital transformation. </p>

<h3 className="news-title">
    <a href="https://www.google.com/search?q=MA+expands+AI-based+fraud+detection+systems+news&sca_esv=aa86132b60f0534c&sxsrf=ANbL-n6lcUqxSa2za2TYqMt2vBPV0Y01Dg%3A1772022136959&ei=eOmeaaubOpmVseMPhcv7kAQ&biw=1440&bih=773&ved=0ahUKEwirt4fw0PSSAxWZSmwGHYXlHkIQ4dUDCBE&uact=5&oq=MA+expands+AI-based+fraud+detection+systems+news&gs_lp=Egxnd3Mtd2l6LXNlcnAiME1BIGV4cGFuZHMgQUktYmFzZWQgZnJhdWQgZGV0ZWN0aW9uIHN5c3RlbXMgbmV3czIFEAAY7wUyBRAAGO8FSPAIUABYAHAAeAGQAQCYAdABoAHQAaoBAzItMbgBA8gBAPgBAvgBAZgCAaAC2QGYAwCSBwMyLTGgB6ICsgcDMi0xuAfZAcIHAzItMcgHB4AIAA&sclient=gws-wiz-serp">MA expands AI-based fraud detection systems</a>
  </h3>
  <p style={{"textAlign":"justify"}}>The company announced enhancements to its AI-powered fraud detection platform to improve real-time payment security and strengthen its global digital payments network.Mastercard (MA) is significantly expanding its AI-based fraud detection systems to combat the rise in digital scams, leveraging generative AI to enhance both the speed and accuracy of transaction monitoring. Key developments include the enhancement of their Consumer Fraud Risk tool to detect real-time authorized push payment (APP) scams and the use of AI to identify compromised cards, achieving a 300% increase in the speed of identifying at-risk merchants. </p>
</div>
  </div>
  </>
);

};

export default Ma;
