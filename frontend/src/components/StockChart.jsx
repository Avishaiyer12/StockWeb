import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const StockChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Closing Prices",
        data: [150, 160, 155, 170],
        borderColor: "blue",
        fill: false,
      },
    ],
  };

  return <Line data={data} />;
};

export default StockChart;

// const StockChart = () => {
//   return <div>Stock Chart</div>;
// };

// export default StockChart;
