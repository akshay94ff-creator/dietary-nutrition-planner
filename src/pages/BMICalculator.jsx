import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/bmi.css";

function BMICalculator() {

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [status, setStatus] = useState("");
  const [history, setHistory] = useState([]);

  const calculateBMI = () => {

    if (!height || !weight) {
      alert("Please enter height and weight");
      return;
    }

    const heightInMeters = height / 100;

    const bmiValue =
      weight /
      (heightInMeters * heightInMeters);

    const finalBMI =
      bmiValue.toFixed(1);

    let bmiStatus = "";

    if (finalBMI < 18.5)
      bmiStatus = "Underweight";

    else if (finalBMI < 25)
      bmiStatus = "Healthy Weight";

    else if (finalBMI < 30)
      bmiStatus = "Overweight";

    else
      bmiStatus = "Obese";

    setBMI(finalBMI);
    setStatus(bmiStatus);

    setHistory([
      ...history,
      {
        bmi: finalBMI,
        status: bmiStatus
      }
    ]);
  };

  return (
    <>
      <Navbar />

      <div className="bmi-page">

        <div className="bmi-card">

          <h1>BMI Calculator</h1>

          <label>Height (cm)</label>

          <input
            type="number"
            placeholder="Enter Height"
            value={height}
            onChange={(e) =>
              setHeight(e.target.value)
            }
          />

          <label>Weight (kg)</label>

          <input
            type="number"
            placeholder="Enter Weight"
            value={weight}
            onChange={(e) =>
              setWeight(e.target.value)
            }
          />

          <button onClick={calculateBMI}>
            Calculate BMI
          </button>

          {bmi && (

            <div className="result">

              <h2>BMI: {bmi}</h2>

              <p>{status}</p>

              {status === "Healthy Weight" &&
                <small>
                  Excellent! Maintain your healthy lifestyle.
                </small>
              }

              {status === "Underweight" &&
                <small>
                  Consider increasing nutritious calorie intake.
                </small>
              }

              {status === "Overweight" &&
                <small>
                  Try regular exercise and balanced meals.
                </small>
              }

              {status === "Obese" &&
                <small>
                  Consult a healthcare professional.
                </small>
              }

            </div>

          )}

          {history.length > 0 && (

            <div className="history">

              <h3>BMI History</h3>

              {history.map((item, index) => (

                <div
                  key={index}
                  className="history-item"
                >
                  BMI: {item.bmi} - {item.status}
                </div>

              ))}

            </div>

          )}

        </div>

      </div>
    </>
  );
}

export default BMICalculator;