import "../styles/features.css";
import {
  FaUtensils,
  FaHeartbeat,
  FaTint,
  FaChartLine
} from "react-icons/fa";

function FeatureCards() {

  const features = [
    {
      icon: <FaUtensils />,
      title: "Meal Planner",
      text: "Generate personalized meal plans."
    },
    {
      icon: <FaHeartbeat />,
      title: "BMI Calculator",
      text: "Track body health metrics."
    },
    {
      icon: <FaTint />,
      title: "Water Tracker",
      text: "Monitor daily hydration goals."
    },
    {
      icon: <FaChartLine />,
      title: "Nutrition Analytics",
      text: "Visualize nutrition progress."
    }
  ];

  return (
    <section className="features-section">

      <h2>Powerful Features</h2>

      <div className="feature-grid">

        {features.map((item, index) => (

          <div className="feature-card" key={index}>

            <div className="feature-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default FeatureCards;