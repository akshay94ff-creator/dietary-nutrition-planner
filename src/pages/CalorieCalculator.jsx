import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/calorie.css";

function CalorieCalculator() {

  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("male");

  const [calories, setCalories] = useState(null);

  const calculateCalories = () => {

    if (!age || !weight || !height) {
      alert("Please fill all fields");
      return;
    }

    let bmr;

    if (gender === "male") {

      bmr =
        10 * weight +
        6.25 * height -
        5 * age +
        5;

    } else {

      bmr =
        10 * weight +
        6.25 * height -
        5 * age -
        161;
    }

    setCalories(Math.round(bmr));
  };

  return (
    <>
      <Navbar />

      <div className="calorie-page">

        <div className="calorie-card">

          <h1>Calorie Calculator</h1>

          <label>Age</label>

          <input
            type="number"
            value={age}
            onChange={(e) =>
              setAge(e.target.value)
            }
          />

          <label>Weight (kg)</label>

          <input
            type="number"
            value={weight}
            onChange={(e) =>
              setWeight(e.target.value)
            }
          />

          <label>Height (cm)</label>

          <input
            type="number"
            value={height}
            onChange={(e) =>
              setHeight(e.target.value)
            }
          />

          <label>Gender</label>

          <select
            value={gender}
            onChange={(e) =>
              setGender(e.target.value)
            }
          >
            <option value="male">
              Male
            </option>

            <option value="female">
              Female
            </option>
          </select>

          <button
            onClick={calculateCalories}
          >
            Calculate Calories
          </button>

          {calories && (

            <div className="result">

              <h2>
                {calories} kcal/day
              </h2>

              <p>
                Recommended Daily Calories
              </p>

            </div>

          )}

        </div>

      </div>
    </>
  );
}

export default CalorieCalculator;