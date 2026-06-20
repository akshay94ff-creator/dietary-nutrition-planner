import Navbar from "../components/Navbar";
import "../styles/dashboard.css";

function Dashboard() {

  const stats = [
    {
      title: "BMI",
      value: "22.5",
      desc: "Healthy Weight"
    },
    {
      title: "Calories",
      value: "1589",
      desc: "Daily Intake"
    },
    {
      title: "Meals",
      value: "3",
      desc: "Today's Plan"
    },
    {
      title: "Allergies",
      value: "2",
      desc: "Detected"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="dashboard-page">

        <div className="dashboard-header">

          <h1>Nutrition Dashboard</h1>

          <p>
            Monitor your nutrition,
            calories, meal plans and
            dietary goals in one place.
          </p>

        </div>

        <div className="dashboard-grid">

          {stats.map((item, index) => (

            <div
              key={index}
              className="dashboard-card"
            >

              <h2>{item.value}</h2>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>

          ))}

        </div>

        <div className="dashboard-summary">

          <h2>Today's Summary</h2>

          <div className="summary-card">

            <p>
              ✅ BMI Status: Healthy Weight
            </p>

            <p>
              🔥 Calories Goal: 1589 kcal
            </p>

            <p>
              🍽 Active Meal Plan: Maintain Weight
            </p>

            <p>
              ⚠ Allergies Tracked: 2
            </p>

          </div>

        </div>

      </div>

    </>
  );
}

export default Dashboard;