import Navbar from "../components/Navbar";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

import "../styles/analytics.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Analytics() {

  const data = {

    labels: [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],

    datasets: [

      {
        label: "Calories Consumed",

        data: [
          1800,
          1900,
          1700,
          2100,
          2000,
          1850,
          1950
        ],

        borderColor: "#6F4E37",

        backgroundColor: "#D8C3A5",

        tension: 0.4
      }

    ]

  };

  return (
    <>
      <Navbar />

      <div className="analytics-page">

        <h1>
          Nutrition Analytics
        </h1>

        <p className="analytics-subtitle">
          Weekly calorie consumption report
        </p>

        <div className="chart-card">

          <Line data={data} />

        </div>

        <div className="analytics-summary">

          <div className="summary-box">

            <h3>Average Calories</h3>

            <p>1900 kcal/day</p>

          </div>

          <div className="summary-box">

            <h3>Highest Intake</h3>

            <p>2100 kcal</p>

          </div>

          <div className="summary-box">

            <h3>Lowest Intake</h3>

            <p>1700 kcal</p>

          </div>

        </div>

      </div>
    </>
  );
}

export default Analytics;